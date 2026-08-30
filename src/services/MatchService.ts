import $api, { API_URL } from '../http';
import { AxiosResponse } from 'axios';
import { io, Socket } from 'socket.io-client';
import { IMatch } from '../models/Match/IMatch';
import { LobbySocketEvent } from '../models/Match/LobbySocketEvent';

// ematch-be dropped the `/matches/:id/status` SSE stream in favor of a
// Socket.IO gateway (MatchGateway). It's mounted on the app's default
// namespace/path, not under the `/api` HTTP prefix (setGlobalPrefix only
// applies to REST controllers), so we connect to the bare host.
const SOCKET_URL = API_URL.replace(/\/api\/?$/, '');

// MatchGateway broadcasts these to *every* connected client rather than
// scoping by room, so subscribeToMatch() filters to the match it was asked
// to watch before calling back.
const LOBBY_UPDATE_EVENTS = [
  LobbySocketEvent.Joined,
  LobbySocketEvent.Left,
  LobbySocketEvent.Ready,
  LobbySocketEvent.Started,
] as const;

export default class MatchService {
  static async create(
    mode: string,
    selectType: string,
    map: string,
  ): Promise<AxiosResponse<IMatch>> {
    return $api.post('matches', { mode, selectType, map });
  }

  static async get(id: string): Promise<AxiosResponse<IMatch>> {
    return await $api.get(`matches/${id}`, {});
  }

  static async getList(): Promise<AxiosResponse<IMatch[]>> {
    return $api.get('matches', {});
  }

  static subscribeToMatch(
    matchId: string,
    userId: string,
    onUpdate: (match: IMatch) => void,
  ): { socket: Socket; unsubscribe: () => void } {
    // MatchGateway.handleConnection reads handshake.auth.userId to know who
    // to remove from pending matches on disconnect, so it has to be set at
    // connect time regardless of whether this client ever emits `lobby:join`.
    const socket: Socket = io(SOCKET_URL, {
      withCredentials: true,
      auth: { userId },
    });

    const handleUpdate = (match: IMatch) => {
      if (match?.id === matchId) {
        onUpdate(match);
      }
    };
    LOBBY_UPDATE_EVENTS.forEach((event) => socket.on(event, handleUpdate));

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
}
