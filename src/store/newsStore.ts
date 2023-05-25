import { makeAutoObservable, observable } from 'mobx';

import NewsService from '../services/NewsService';
import { INews } from '../models/INews';
export default class NewsStore {
  news = [] as INews[];
  isLoading = false;

  setNews(news: INews[]) {
    this.news = news.slice();
  }
  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  constructor() {
    makeAutoObservable(this);
  }

  async loadNews() {
    this.setIsLoading(true);
    try {
      const response = await NewsService.loadNews();
      this.setNews(response.data);
    } catch (e: any) {
      console.error(e.response?.data?.message);
    } finally {
      this.setIsLoading(false);
      console.log(this.isLoading);
    }
  }

  async createNews(title: string, content: string) {
    let response;
    try {
      response = await NewsService.createNews(title, content);
    } catch (e: any) {
      console.error(e.response?.data?.message);
    } finally {
      console.log(response);
    }
  }
}
