import {
  EMapSelectType,
  EMaps,
  EMatchBelonging,
  EMatchMode,
  EMatchStatus,
} from './EMAtch';

export type IMatch = {
  id: string;
  status: EMatchStatus;
  mode: EMatchMode;
  mapSelection: EMapSelectType;
  map: EMaps;
  belonging: EMatchBelonging;
  stats: string;
  ip: string;
  creatorId: string;
  memberships: MembershipDto[];
};

// ematch-be's entities use uuid primary keys, so these are all string ids,
// not numbers.
export type MembershipDto = {
  id: string;
  userId: string;
  team: 1 | 2;
  matchId: string;
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
