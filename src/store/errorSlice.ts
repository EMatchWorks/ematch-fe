import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from '../models/Error/IError';

interface ErrorState {
  errors: IError[];
}

const initialState: ErrorState = {
  errors: [],
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<IError>) => {
      state.errors.push(action.payload);
    },
    deleteError: (state) => {
      state.errors.shift();
    },
  },
});

export const { addError, deleteError } = errorSlice.actions;
export default errorSlice.reducer;
