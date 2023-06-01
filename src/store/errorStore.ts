import { makeAutoObservable } from 'mobx';
import { IError } from '../models/Error/IError';

export default class ErrorStore {
  errors = [] as IError[];

  constructor() {
    makeAutoObservable(this);
  }

  addError(error: IError) {
    //  this.errors.push({ ...error });
    //  console.log(this.errors);
  }

  getError() {
    return this.errors[0];
  }

  deleteError() {
    this.errors.shift();
  }
}
