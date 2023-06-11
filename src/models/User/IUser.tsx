export interface IUser {
  id: number;
  username: string;
  email: string;
  profileId: number;
  steamId?: string;
  role?: string;
}
