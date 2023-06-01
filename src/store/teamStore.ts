import { makeAutoObservable, set } from 'mobx';
import { ITeam } from '../models/Team/ITeam';
import TeamService from '../services/TeamService';

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
      const response = await TeamService.getTeam(id);
      console.log(response.data);
      this.setTeam(response.data);
    } catch (error: any) {
      console.log(error.response.data);
    } finally {
      this.setIsLoading(false);
    }
  }
}
