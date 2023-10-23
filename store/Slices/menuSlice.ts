import { createSlice } from "@reduxjs/toolkit";
const menuSlice = createSlice({
  name: "menu",
  initialState: {
    // title: "Home",
    // option: "Welcome",
  } as { title: string; option: string },
  reducers: {
    moveMenuTitle(state, action) {},
    moveMenuOption(state, action) {
      state.option = action.payload.option;
    },
    moveMenuTitleAndOption(state, action) {
      state.title = action.payload.title;
      state.option = action.payload.option;
    },
  },
});
export const menuActions = menuSlice.actions;
export default menuSlice;
