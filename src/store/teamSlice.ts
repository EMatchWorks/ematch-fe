import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ITeam } from '../models/Team/ITeam';

// The `team` module (and its endpoints, e.g. GET /team/:id, POST /match/join)
// was removed from ematch-be, so TeamService no longer exists. These thunks
// are stubbed out until the backend exposes an equivalent team feature again.

interface TeamState {
  team: ITeam;
  isLoading: boolean;
}

const initialState: TeamState = {
  team: {} as ITeam,
  isLoading: false,
};

export const loadTeam = createAsyncThunk(
  'team/loadTeam',
  async (_id: number, { getState }) => {
    // Backend team endpoint no longer exists - nothing to load.
    const state = getState() as { team: TeamState };
    return state.team.team;
  },
);

export const addUser = createAsyncThunk(
  'team/addUser',
  async (_dto: { teamId: number; matchId: number }) => {
    // Backend team-join endpoint no longer exists - no-op for now.
    return null;
  },
);

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTeam.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadTeam.fulfilled, (state, action) => {
        state.team = action.payload;
        state.isLoading = false;
      })
      .addCase(loadTeam.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default teamSlice.reducer;
