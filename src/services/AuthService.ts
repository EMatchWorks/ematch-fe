import { AuthResponse } from './../models/response/AuthResponse';
import $api from '../http';
import { AxiosResponse } from 'axios';

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/auth/login', { username, password });
  }

  static async registration(
    username: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    console.log(1);
    return $api.post('/auth/register', { username, email, password });
  }

  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/auth/logout');
  }
}
