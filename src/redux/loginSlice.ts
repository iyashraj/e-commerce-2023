// src/redux/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  isRegistering: boolean
}

const initialState: CounterState = {
  value: 0,
  isRegistering: false
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    registerLoading: (state, payload:any) => {
        return state.isRegistering = payload;
      },
  },
});

export const { registerLoading } = counterSlice.actions;
export default counterSlice.reducer;
