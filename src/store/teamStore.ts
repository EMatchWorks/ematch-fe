import { makeAutoObservable, set } from 'mobx';
import { ITeam } from '../models/Team/ITeam';

// The `team` module (and its endpoints, e.g. GET /team/:id, POST /match/join)
// was removed from ematch-be, so TeamService no longer exists. These methods
// are stubbed out until the backend exposes an equivalent team feature again.

export default class TeamStore {
  team = {} as ITeam;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setTeam(team: ITeam) {
    this.team = team;
  }

  async loadTeam(id: number) {
    this.setIsLoading(true);
    try {
      // Backend team endpoint no longer exists - nothing to load.
      return this.team;
    } finally {
      this.setIsLoading(false);
    }
  }

  async addUser(teamId: number, matchId: number) {
    // Backend team-join endpoint no longer exists - no-op for now.
    return null;
  }
}
