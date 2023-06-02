import { makeAutoObservable } from 'mobx';
import { IError } from '../models/Error/IError';
import { IMatch } from '../models/Match/IMatch';
import MatchService from '../services/MatchService';

export default class LoadMatch {
  match = {} as IMatch;
  isLoadingMatch = false;
  matchError = {} as IError;

  constructor() {
    makeAutoObservable(this);
  }

  setMatch(match: IMatch) {
    this.match = { ...match };
  }

  setIsLoadingMatch(isLoading: boolean) {
    this.isLoadingMatch = isLoading;
  }

  setMatchError(error: IError) {
    this.matchError = { ...error };
  }
  getMatchError(): IError {
    const error = { ...this.matchError };
    this.cleareMatchError();
    return error;
  }

  cleareMatchError() {
    this.matchError = {} as IError;
  }

  async loadMatch(id: number) {
    this.setIsLoadingMatch(true);
    this.cleareMatchError();
    try {
      const response = await MatchService.get(id);
      this.setMatch({ ...response.data });
    } catch (e: any) {
      console.log(e.response);
      this.setMatchError({
        status: Number(e.response.data.statusCode),
        message: e.response.data.message.toString(),
      });
    } finally {
      this.setIsLoadingMatch(false);
      console.log(this.isLoadingMatch);
    }
  }
}
