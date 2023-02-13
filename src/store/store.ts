import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { IUser } from './../models/IUser';
export default class Store {
  user = {} as IUser;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(username: string, password: string) {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
      console.log(response);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(username: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(
        username,
        email,
        password
      );
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
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
}
