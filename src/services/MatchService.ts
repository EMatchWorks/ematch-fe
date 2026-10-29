import $api, { API_URL } from '../http';
import { AxiosResponse } from 'axios';
import { io, Socket } from 'socket.io-client';
import { IMatch } from '../models/Match/IMatch';
import { LobbySocketEvent } from '../models/Match/LobbySocketEvent';
import { EMatchStatus } from '../models/Match/EMAtch';

// ematch-be dropped the `/matches/:id/status` SSE stream in favor of a
// Socket.IO gateway (MatchGateway). It's mounted on the app's default
// namespace/path, not under the `/api` HTTP prefix (setGlobalPrefix only
// applies to REST controllers), so we connect to the bare host.
const SOCKET_URL = API_URL.replace(/\/api\/?$/, '');

// MatchGateway scopes these to the match's own Socket.IO room, but
// subscribeToMatch() still filters by matchId as a cheap defensive check.
const LOBBY_UPDATE_EVENTS = [
  LobbySocketEvent.Joined,
  LobbySocketEvent.Left,
  LobbySocketEvent.Ready,
  LobbySocketEvent.Starting,
  LobbySocketEvent.Started,
  LobbySocketEvent.Finished,
] as const;

export default class MatchService {
  static async create(
    teamSize: number,
    selectType: string,
    map: string,
  ): Promise<AxiosResponse<IMatch>> {
    return $api.post('matches', { teamSize, selectType, map });
  }

  static async get(id: string): Promise<AxiosResponse<IMatch>> {
    return await $api.get(`matches/${id}`, {});
  }

  static async getList(
    statuses?: EMatchStatus[],
  ): Promise<AxiosResponse<IMatch[]>> {
    // axios serializes an array param as repeated keys by default
    // (?status=Pending&status=InProgress), matching what
    // MatchCollectionQueryDto on ematch-be expects.
    return $api.get('matches', { params: { status: statuses } });
  }

  static async remove(id: string): Promise<AxiosResponse<void>> {
    return $api.delete(`matches/${id}`);
  }

  static subscribeToMatch(
    matchId: string,
    userId: string,
    onUpdate: (match: IMatch) => void,
    // Disconnected/Reconnected carry a bare `{ userId }`, not a match - the
    // gateway already scopes them to this match's room before they ever
    // reach this socket, so no matchId filtering is needed here either.
    onPresenceChange?: (userId: string, isConnected: boolean) => void,
    onStartFailed?: (message: string) => void,
    onDeleted?: () => void,
  ): { socket: Socket; unsubscribe: () => void } {
    // MatchGateway.handleConnection reads handshake.auth.userId to know who
    // to remove from pending matches on disconnect, and handshake.auth.matchId
    // to join this match's Socket.IO room immediately - both have to be set
    // at connect time, since a viewer watching a match page never emits
    // `lobby:join` (that's only for actually joining a team).
    const socket: Socket = io(SOCKET_URL, {
      withCredentials: true,
      auth: { userId, matchId },
    });

    const handleUpdate = (match: IMatch) => {
      if (match?.id === matchId) {
        onUpdate(match);
      }
    };
    LOBBY_UPDATE_EVENTS.forEach((event) => socket.on(event, handleUpdate));

    socket.on(LobbySocketEvent.Disconnected, ({ userId: droppedUserId }) => {
      onPresenceChange?.(droppedUserId, false);
    });
    socket.on(LobbySocketEvent.Reconnected, ({ userId: backUserId }) => {
      onPresenceChange?.(backUserId, true);
    });
    socket.on(LobbySocketEvent.StartFailed, ({ message }) => {
      onStartFailed?.(message);
    });
    socket.on(LobbySocketEvent.Deleted, ({ matchId: deletedMatchId }) => {
      if (deletedMatchId === matchId) {
        onDeleted?.();
      }
    });

    return {
      socket,
      unsubscribe: () => socket.disconnect(),
    };
  }

  static joinLobby(
    socket: Socket,
    dto: { userId: string; matchId: string; team: 1 | 2; isCaptain: boolean },
  ) {
    socket.emit(LobbySocketEvent.Join, dto);
  }

  static leaveLobby(
    socket: Socket,
    dto: { userId: string; matchId: string },
  ) {
    socket.emit(LobbySocketEvent.Leave, dto);
  }

  static startMatch(socket: Socket, dto: { userId: string; matchId: string }) {
    socket.emit(LobbySocketEvent.Start, dto);
  }
}
