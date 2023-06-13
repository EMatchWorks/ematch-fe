import $api from '../http';
import { AxiosResponse } from 'axios';
import { IUserAvatar } from '../models/User/IUserAvatar';

export default class UserAvatarService {
  static async fetchUserAvatar(userId: number): Promise<AxiosResponse<string>> {
    const response = await $api.get<string>(`/user/${userId}/avatar`);
    return response;
  }
}
