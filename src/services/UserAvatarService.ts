import $api from '../http';
import { AxiosResponse } from 'axios';
import { UserAvatar } from '../models/UserAvatar';

export default class UserAvatarService {
  static fetchUserAvatar(userId: number): Promise<AxiosResponse<UserAvatar>> {
    return $api.get<UserAvatar>(`/api/profile/avatar/${userId}`);
  }
}
