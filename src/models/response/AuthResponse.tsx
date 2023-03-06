import { IUser } from '../IUser';

export interface AuthResponse {
  AccessToken: string;
  RefreshToken: string;
  User: IUser;
}
