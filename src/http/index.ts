import { AuthResponse } from './../models/response/AuthResponse';
import axios from 'axios';

export const API_URL = 'http://localhost:9000/';

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
        const response = await axios.get<AuthResponse>(
          `${API_URL}api/auth/refresh`,
          { withCredentials: true },
        );
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originRequest);
      } catch (e) {
        console.error('NOT AUTHORIZED');
      }
    }
  },
);

export default $api;
