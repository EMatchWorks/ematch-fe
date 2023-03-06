import { AuthResponse } from './../models/response/AuthResponse';
import $api from '../http';
import { AxiosResponse } from 'axios';

export default class AuthService {
  static async login(
    UsernameOrEmail: string,
    Password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/api/auth/login', { UsernameOrEmail, Password });
  }

  static async registration(
    Username: string,
    Email: string,
    Password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    console.log(1);
    return $api.post('/api/auth/register', { Username, Email, Password });
  }

  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    return $api.post('/api/auth/logout');
  }
}
