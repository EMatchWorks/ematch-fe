import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IError } from '../models/Error/IError';
import { IMatch } from '../models/Match/IMatch';
import MatchService from '../services/MatchService';

interface LoadMatchState {
  match: IMatch;
  isLoadingMatch: boolean;
  matchError: IError;
}

const initialState: LoadMatchState = {
  match: {} as IMatch,
  isLoadingMatch: false,
  matchError: {} as IError,
};

export const loadMatch = createAsyncThunk(
  'loadMatch/loadMatch',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await MatchService.get(id);
      return response.data;
    } catch (e: any) {
      console.log(e.response);
      return rejectWithValue({
        status: Number(e.response.data.statusCode),
        message: e.response.data.message.toString(),
      } as IError);
    }
  },
);

const loadMatchSlice = createSlice({
  name: 'loadMatch',
  initialState,
  reducers: {
    clearMatchError: (state) => {
      state.matchError = {} as IError;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMatch.pending, (state) => {
        state.isLoadingMatch = true;
        state.matchError = {} as IError;
      })
      .addCase(loadMatch.fulfilled, (state, action) => {
        state.match = action.payload;
        state.isLoadingMatch = false;
      })
      .addCase(loadMatch.rejected, (state, action) => {
        state.matchError = action.payload as IError;
        state.isLoadingMatch = false;
      });
  },
});

export const { clearMatchError } = loadMatchSlice.actions;
export default loadMatchSlice.reducer;
