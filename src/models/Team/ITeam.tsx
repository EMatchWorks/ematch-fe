import { IUser } from '../User/IUser';

export interface ITeam {
  id: number;
  name: string;
  description?: string;
  isDisposable: boolean;
  size: number;
  users: IUser[];
}
