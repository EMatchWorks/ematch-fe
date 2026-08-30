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

  static async logout(): Promise<AxiosResponse<void>> {
    // ematch-be logout is now `GET /auth/logout` returning 204 with no body -
    // it just clears the auth cookies server-side.
    return $api.get('/auth/logout');
  }
  static authSteam(): Promise<AxiosResponse<HTMLElement>> {
    return $api.get<HTMLElement>(`/auth/steam`);
  }
}
