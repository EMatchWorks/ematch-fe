import $api from '../http';
import { AxiosResponse } from 'axios';
import { ITeam } from '../models/Team/ITeam';
import { IMatch } from '../models/Match/IMatch';

export default class TeamService {
  static async getTeam(id: number): Promise<AxiosResponse<ITeam>> {
    return $api.get(`/team/${id}`, {});
  }
  static async addUser(
    teamId: number,
    matchId: number,
  ): Promise<AxiosResponse<IMatch>> {
    return $api.post(`/match/join`, { teamId, matchId });
  }
}
