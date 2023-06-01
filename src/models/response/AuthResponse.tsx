import { IUser } from '../User/IUser';

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  userData: IUser;
}
