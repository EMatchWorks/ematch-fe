import { AuthResponse } from './../models/response/AuthResponse';
import $api from '../http';
import { AxiosResponse } from 'axios';

export default class AuthService {
  static async login(
    usernameOrEmail: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/api/auth/login', { usernameOrEmail, password });
  }

  static async registration(
    username: string,
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/api/auth/register', { username, email, password });
  }

  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/api/auth/logout');
  }
}
