import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import matchReducer from './matchSlice';
import newsReducer from './newsSlice';
import teamReducer from './teamSlice';
import loadMatchReducer from './loadMatchSlice';
import errorReducer from './errorSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    match: matchReducer,
    news: newsReducer,
    team: teamReducer,
    loadMatch: loadMatchReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
