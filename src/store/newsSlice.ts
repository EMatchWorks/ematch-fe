import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import NewsService from '../services/NewsService';
import { INews } from '../models/News/INews';

interface NewsState {
  news: INews[];
  isLoading: boolean;
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
};

export const loadNews = createAsyncThunk(
  'news/loadNews',
  async (_: void, { rejectWithValue }) => {
    try {
      const response = await NewsService.loadNews();
      return response.data;
    } catch (e: any) {
      console.error(e.response?.data?.message);
      return rejectWithValue(e.response?.data?.message);
    }
  },
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadNews.fulfilled, (state, action) => {
        state.news = action.payload as INews[];
        state.isLoading = false;
      })
      .addCase(loadNews.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default newsSlice.reducer;
