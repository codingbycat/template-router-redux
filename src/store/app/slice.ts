import { createSlice } from '@reduxjs/toolkit';
import appState from './state';

export const appSlice = createSlice({
  name: 'app',
  initialState: appState,
  reducers: {
    addCount: (state) => {
      state.count += 1;
    },

    minusCount: (state) => {
      state.count -= 1;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addCount, minusCount } = appSlice.actions;

export default appSlice.reducer;
