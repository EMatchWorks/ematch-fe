import { IAuthResponse } from '../models/response/AuthResponse';
import $api from '../http';
import { AxiosResponse } from 'axios';
import { INews } from '../models/News/INews';

export default class CreateNewsService {
  static async createNews(
    title: string,
    content: string,
  ): Promise<AxiosResponse<INews[]>> {
    return $api.post('/news', { title, content });
  }

  static async loadNews(): Promise<AxiosResponse<INews[]>> {
    return $api.get('/news');
  }
}
