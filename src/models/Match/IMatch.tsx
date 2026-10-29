import {
  EMapSelectType,
  EMaps,
  EMatchBelonging,
  EMatchStatus,
} from './EMAtch';

export type IMatch = {
  id: string;
  status: EMatchStatus;
  /** Size of each (symmetrical) team, e.g. 1 for 1v1, 5 for 5v5. */
  teamSize: number;
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
  teamSize: number;
  mapSelection: EMapSelectType;
  map: EMaps;
}

export interface IMatchErorr {
  status: number;
  message: string;
}
