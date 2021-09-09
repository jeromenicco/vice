import { createSlice } from "@reduxjs/toolkit";

export const timeStampSlice = createSlice({
  name: "timeStamp",
  initialState: {
    currentTime: 0,
  },
  reducers: {
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
  },
});

export const { setCurrentTime } = timeStampSlice.actions;

export default timeStampSlice.reducer;
