import { IWrappedAuthResponse } from './../models/response/AuthResponse';
import axios from 'axios';

export const API_URL = 'http://localhost:3000/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (response) => {
    // ematch-be wraps every response body as `{ data: <payload> }`
    // (see TransformInterceptor). Unwrap it once here so the rest of the
    // app can treat `response.data` as the actual payload, as its types
    // already assume.
    if (
      response.data &&
      typeof response.data === 'object' &&
      'data' in response.data
    ) {
      response.data = response.data.data;
    }
    return response;
  },
  async (error) => {
    const originRequest = error.config;

    if (error.response.status === 401) {
      try {
        const response = await axios.get<IWrappedAuthResponse>(
          `${API_URL}/auth/refresh`,
          { withCredentials: true },
        );
        // NOTE: ematch-be's `/auth/refresh` no longer returns the access token
        // in the response body - it only sets it as an httpOnly cookie. That
        // cookie is unreadable from JS, so it can't be forwarded via the
        // `Authorization: Bearer` header that protected routes still expect.
        // Refresh is effectively broken on the backend side right now; this
        // just avoids storing `undefined` until that's resolved upstream.
        const accessToken = response?.data?.data?.accessToken;
        if (accessToken) {
          localStorage.setItem('token', accessToken);
        }
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
