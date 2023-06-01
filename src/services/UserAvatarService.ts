import $api from '../http';
import { AxiosResponse } from 'axios';
import { IUserAvatar } from '../models/User/IUserAvatar';

export default class UserAvatarService {
  static fetchUserAvatar(userId: number): Promise<AxiosResponse<IUserAvatar>> {
    return $api.get<IUserAvatar>(`/profile/avatar/${userId}`);
  }
}
