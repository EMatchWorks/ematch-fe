import { IUser } from '../models/User/IUser';
import $api from '../http';
import { AxiosResponse } from 'axios';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/user');
  }

  static fetchUser(id: string): Promise<AxiosResponse<IUser>> {
    return $api.get<IUser>(`/user/${id}`);
  }
}
