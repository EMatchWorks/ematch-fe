import { AuthResponse } from './../models/response/AuthResponse';
import $api from '../http';
import { AxiosResponse } from 'axios';

export default class CreateMatchService {
  static async create(
    userid: number,
    mode: string,
    selectType: string,
    map: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('api/match', { userid, mode, selectType, map });
  }
}
