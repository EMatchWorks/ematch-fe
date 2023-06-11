import { makeAutoObservable } from 'mobx';
import { EMapSelectType, EMaps, EMatchMode } from '../models/Match/EMAtch';
import { IMatch, ICreateMatch, IMatchErorr } from '../models/Match/IMatch';
import MatchService from '../services/MatchService';
import { IError } from '../models/Error/IError';

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
      const response = await MatchService.getList();
      this.setMatchList(response.data);
    } catch (e: any) {
      console.error(e.response?.data?.message);
    } finally {
      this.setIsLoadingMatchList(false);
    }
  }

  async createMatch(mode: string, selectType: string, map: string) {
    try {
      const response = await MatchService.create(mode, selectType, map);
      console.log(response);
      return response.data.id;
    } catch (e: any) {
      console.error(e);
    }
  }
}
