// Socket.IO event names used by MatchGateway on ematch-be. Mirrored there
// as LobbySocketEvent (src/match/lobby-socket-event.enum.ts) - keep both in
// sync when adding/renaming an event, there's no shared package between
// the two repos.
export enum LobbySocketEvent {
  Join = 'lobby:join',
  JoinFailed = 'lobby:join-failed',
  Joined = 'lobby:joined',
  Leave = 'lobby:leave',
  LeaveFailed = 'lobby:leave-failed',
  Left = 'lobby:left',
  Ready = 'lobby:ready',
  Kicked = 'lobby:kicked',
  // Emitted once the Dathost server has actually finished booting and is
  // ready to accept connections - before this, the match's `ip` is set but
  // nothing is listening there yet.
  Started = 'lobby:started',
}
