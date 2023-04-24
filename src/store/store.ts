import { API_URL } from './../http/index';
import { AuthResponse } from './../models/response/AuthResponse';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { IUser } from './../models/IUser';
import axios from 'axios';
export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(usernameOrEmail: string, password: string) {
    this.setIsLoading(true);
    try {
      const response = await AuthService.login(usernameOrEmail, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.userData);
    } catch (e: any) {
      console.error(e.response?.data?.message);
    } finally {
      this.setIsLoading(false);
    }
  }

  async registration(username: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(
        username,
        email,
        password,
      );
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.userData);
    } catch (e: any) {
      console.error(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e: any) {
      console.error(e.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setIsLoading(true);
    try {
      const response = await axios.get<AuthResponse>(
        `${API_URL}api/auth/refresh`,
        {
          withCredentials: true,
        },
      );
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.userData);
    } catch (e: any) {
      console.error(e.response?.data?.message);
    } finally {
      this.setIsLoading(false);
    }
  }
}
