import axios from 'axios';
import { config } from 'process';

export const API_USR = 'http://localhost:9000/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_USR,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default $api;
