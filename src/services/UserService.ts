import { IUser } from './../models/IUser';
import $api from '../http';
import { AxiosResponse } from 'axios';

export default class AuthService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users');
  }
}
