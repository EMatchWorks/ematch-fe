import { IUser } from '../User/IUser';

export interface IAuthPayload {
  accessToken: string;
  refreshToken: string;
  userData: IUser;
}

// $api's response interceptor unwraps ematch-be's `{ data: <payload> }`
// envelope, so AuthService (which uses $api) resolves straight to this.
export type IAuthResponse = IAuthPayload;

// Raw `axios` calls (userStore.checkAuth, http/index.ts's 401 refresh retry)
// bypass that interceptor and still see the envelope as-is.
export interface IWrappedAuthResponse {
  data: IAuthPayload;
}
