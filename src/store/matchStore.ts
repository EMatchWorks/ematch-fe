import { makeAutoObservable } from 'mobx';
import { IMatch } from '../models/Match/IMatch';
import { EMatchStatus } from '../models/Match/EMAtch';
import MatchService from '../services/MatchService';

// The Play page's match list is for finding a match to join - Finished and
// Cancelled matches aren't actionable there.
const JOINABLE_MATCH_STATUSES = [
  EMatchStatus.Pending,
  EMatchStatus.InProgress,
];

export default class MatchStore {
  matchList = [] as IMatch[];
  isLoadingMatchList = false;

  constructor() {
    makeAutoObservable(this);
  }

  setMatchList(matchList: IMatch[]) {
    this.matchList = matchList.slice();
  }

  setIsLoadingMatchList(isLoading: boolean) {
    this.isLoadingMatchList = isLoading;
  }

  async loadMatchList() {
    try {
      this.setIsLoadingMatchList(true);
      const response = await MatchService.getList(JOINABLE_MATCH_STATUSES);
      this.setMatchList(response.data);
    } catch (e: any) {
      console.error(e.response?.data?.message);
    } finally {
      this.setIsLoadingMatchList(false);
    }
  }

  async createMatch(teamSize: number, selectType: string, map: string) {
    try {
      const response = await MatchService.create(teamSize, selectType, map);
      return response.data.id;
    } catch (e: any) {
      console.error(e);
    }
  }
}
