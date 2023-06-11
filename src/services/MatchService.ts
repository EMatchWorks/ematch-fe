import { IAuthResponse } from '../models/response/AuthResponse';
import $api from '../http';
import { AxiosResponse } from 'axios';
import { IMatch, ICreateMatch, IMatchErorr } from '../models/Match/IMatch';

export default class MatchService {
  static async create(
    mode: string,
    selectType: string,
    map: string,
  ): Promise<AxiosResponse<IMatch>> {
    return $api.post('match', { mode, selectType, map });
  }

  static async get(id: number): Promise<AxiosResponse<IMatch>> {
    console.log(id);
    return await $api.get(`match/${id}`, {});
  }

  static async getList(): Promise<AxiosResponse<IMatch[]>> {
    return $api.get('match', {});
  }

  static eventSource(teamID: number) {
    return new EventSource(`/match/${teamID}/status`);
  }
}
