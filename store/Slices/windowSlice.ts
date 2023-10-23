import { createSlice } from "@reduxjs/toolkit";
const windowSlice = createSlice({
  name: "window",
  initialState: {} as { height: number; width: number; webMode: boolean },
  reducers: {
    updateSize(state, action) {
      state.height = action.payload.height;
      state.width = action.payload.width;
      action.payload.width > 780
        ? (state.webMode = true)
        : (state.webMode = false);
    },
  },
});
export const windowActions = windowSlice.actions;
export default windowSlice;
