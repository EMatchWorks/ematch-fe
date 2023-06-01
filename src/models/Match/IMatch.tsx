import { EMapSelectType, EMaps, EMatchMode, EMatchStatus } from './EMAtch';

export interface IMatch {
  id: number;
  status: EMatchStatus;
  stats: string;
  type: EMatchMode;
  mapSelection: EMapSelectType;
  map: EMaps;
  ip: string;
  creatorId: number;
  team1Id: number;
  team2Id: number;
}

export interface ICreateMatch {
  mode: EMatchMode;
  mapSelection: EMapSelectType;
  map: EMaps;
}

export interface IMatchErorr {
  status: number;
  message: string;
}
