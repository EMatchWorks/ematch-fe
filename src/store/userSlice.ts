import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../http/index';
import { IWrappedAuthResponse } from '../models/response/AuthResponse';
import AuthService from '../services/AuthService';
import { IUser } from '../models/User/IUser';

interface UserState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: UserState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
};

export const login = createAsyncThunk(
  'user/login',
  async (
    { usernameOrEmail, password }: { usernameOrEmail: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await AuthService.login(usernameOrEmail, password);
      const accessToken = response?.data?.accessToken;
      const userData = response?.data?.userData;
      localStorage.setItem('token', accessToken);
      return userData;
    } catch (e: any) {
      console.error(e.response?.data?.message);
      return rejectWithValue(e.response?.data?.message);
    }
  },
);

export const registration = createAsyncThunk(
  'user/registration',
  async (
    {
      username,
      email,
      password,
    }: { username: string; email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await AuthService.registration(
        username,
        email,
        password,
      );
      const accessToken = response?.data?.accessToken;
      const userData = response?.data?.userData;
      localStorage.setItem('token', accessToken);
      return userData;
    } catch (e: any) {
      console.error(e.response?.data?.message);
      return rejectWithValue(e.response?.data?.message);
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_: void, { rejectWithValue }) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
    } catch (e: any) {
      console.error(e.response?.data?.message);
      return rejectWithValue(e.response?.data?.message);
    }
  },
);

export const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async (_: void, { rejectWithValue }) => {
    try {
      const response = await axios.get<IWrappedAuthResponse>(
        `${API_URL}/auth/refresh`,
        {
          withCredentials: true,
        },
      );
      const accessToken = response?.data?.data?.accessToken;
      const userData = response?.data?.data?.userData;
      localStorage.setItem('token', accessToken);
      return userData;
    } catch (e: any) {
      console.error(e.response?.data?.message);
      return rejectWithValue(e.response?.data?.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload as IUser;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload as IUser;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuth = false;
        state.user = {} as IUser;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload as IUser;
        state.isLoading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
