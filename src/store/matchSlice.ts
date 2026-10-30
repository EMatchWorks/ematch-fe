import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IMatch } from '../models/Match/IMatch';
import { EMatchStatus } from '../models/Match/EMAtch';
import MatchService from '../services/MatchService';

// The Play page's match list is for finding a match to join - Finished and
// Cancelled matches aren't actionable there.
const JOINABLE_MATCH_STATUSES = [
  EMatchStatus.Pending,
  EMatchStatus.InProgress,
];

interface MatchState {
  matchList: IMatch[];
  isLoadingMatchList: boolean;
}

const initialState: MatchState = {
  matchList: [],
  isLoadingMatchList: false,
};

export const loadMatchList = createAsyncThunk(
  'match/loadMatchList',
  async (_: void, { rejectWithValue }) => {
    try {
      const response = await MatchService.getList(JOINABLE_MATCH_STATUSES);
      return response.data;
    } catch (e: any) {
      console.error(e.response?.data?.message);
      return rejectWithValue(e.response?.data?.message);
    }
  },
);

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMatchList.pending, (state) => {
        state.isLoadingMatchList = true;
      })
      .addCase(loadMatchList.fulfilled, (state, action) => {
        state.matchList = action.payload as IMatch[];
        state.isLoadingMatchList = false;
      })
      .addCase(loadMatchList.rejected, (state) => {
        state.isLoadingMatchList = false;
      });
  },
});

export default matchSlice.reducer;
