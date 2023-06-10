import {
  EMapSelectType,
  EMaps,
  EMatchBelonging,
  EMatchMode,
  EMatchStatus,
} from './EMAtch';

export type IMatch = {
  id: number;
  status: EMatchStatus;
  mode: EMatchMode;
  mapSelection: EMapSelectType;
  map: EMaps;
  belonging: EMatchBelonging;
  stats: string;
  ip: string;
  creatorId: number;
  users: MembershipDto[];
};

export type MembershipDto = {
  id: number;
  userId: number;
  team: 1 | 2;
  matchId: number;
  isCaptain: boolean;
};

export interface ICreateMatch {
  mode: EMatchMode;
  mapSelection: EMapSelectType;
  map: EMaps;
}

export interface IMatchErorr {
  status: number;
  message: string;
}
