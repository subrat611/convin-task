import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "historySlice",
  initialState: [],
  reducers: {
    setHistory(state, actions) {
      state.unshift(actions.payload);
      return state;
    },
  },
});

export const { setHistory } = historySlice.actions;

export default historySlice.reducer;
