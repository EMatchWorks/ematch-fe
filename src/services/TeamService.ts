import { IAuthResponse } from '../models/response/AuthResponse';
import $api from '../http';
import { AxiosResponse } from 'axios';
import { INews } from '../models/News/INews';
import { ITeam } from '../models/Team/ITeam';

export default class TeamService {
  static async getTeam(id: number): Promise<AxiosResponse<ITeam>> {
    return $api.get(`/team/${id}`, {});
  }
}
