// Socket.IO event names used by MatchGateway on ematch-be. Mirrored there
// as LobbySocketEvent (src/match/types.ts) - keep both in sync when
// adding/renaming an event, there's no shared package between the two repos.
export enum LobbySocketEvent {
  Join = 'lobby:join',
  JoinFailed = 'lobby:join-failed',
  Joined = 'lobby:joined',
  Leave = 'lobby:leave',
  LeaveFailed = 'lobby:leave-failed',
  Left = 'lobby:left',
  Ready = 'lobby:ready',
  Kicked = 'lobby:kicked',
  // Captain-triggered request to boot the Dathost server for a Pending
  // match - no longer happens automatically just because the lobby filled.
  Start = 'lobby:start',
  StartFailed = 'lobby:start-failed',
  // Match moved Pending -> Starting because the captain started it. Not to
  // be confused with `Started`, which fires once the server is actually
  // ready to connect to.
  Starting = 'lobby:starting',
  // Emitted once the Dathost server has actually finished booting and is
  // ready to accept connections - before this, the match's `ip` is set but
  // nothing is listening there yet.
  Started = 'lobby:started',
  // A player's socket dropped and the backend started its grace-period
  // timer before kicking them - they're still a member, just not confirmed
  // connected yet.
  Disconnected = 'lobby:disconnected',
  // The player from a Disconnected event reconnected before the grace
  // period elapsed, so the pending kick was cancelled.
  Reconnected = 'lobby:reconnected',
  // Dathost reported the match ended (via its match_end_url webhook) -
  // status flips to Finished.
  Finished = 'lobby:finished',
}
