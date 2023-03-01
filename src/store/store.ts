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

  async login(UsernameOrEmail: string, Password: string) {
    this.setIsLoading(true);
    try {
      const response = await AuthService.login(UsernameOrEmail, Password);
      localStorage.setItem('token', response.data.AccessToken);
      this.setAuth(true);
      this.setUser(response.data.UserData);
      console.log(response);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setIsLoading(false);
    }
  }

  async registration(Username: string, Email: string, Password: string) {
    try {
      const response = await AuthService.registration(
        Username,
        Email,
        Password
      );
      localStorage.setItem('token', response.data.AccessToken);
      this.setAuth(true);
      this.setUser(response.data.UserData);
      console.log(response);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}auth/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.AccessToken);
      this.setAuth(true);
      this.setUser(response.data.UserData);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
}
