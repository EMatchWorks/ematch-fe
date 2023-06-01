import { IAuthResponse } from './../models/response/AuthResponse';
import $api from '../http';
import { AxiosResponse } from 'axios';

export default class AuthService {
  static async login(
    usernameOrEmail: string,
    password: string,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post('/auth/login', { usernameOrEmail, password });
  }

  static async registration(
    username: string,
    email: string,
    password: string,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post('/auth/register', { username, email, password });
  }

  static async logout(): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post('/auth/logout');
  }
}
