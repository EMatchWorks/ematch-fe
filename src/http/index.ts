import { IAuthResponse } from './../models/response/AuthResponse';
import axios from 'axios';

export const API_URL = 'http://localhost:9000/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originRequest = error.config;

    if (error.response.status === 401) {
      try {
        const response = await axios.get<IAuthResponse>(
          `${API_URL}/auth/refresh`,
          { withCredentials: true },
        );
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originRequest);
      } catch (e) {
        console.error('NOT AUTHORIZED');
      }
    } else {
      throw error;
    }
  },
);

export default $api;
