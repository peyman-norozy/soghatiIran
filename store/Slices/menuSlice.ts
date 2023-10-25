import { createSlice } from "@reduxjs/toolkit";
export type TBotMenu = "home" | "grouping" | "search" | "addAd" | "profile";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    botMenu: "home",
  } as {
    botMenu: TBotMenu;
    option: string;
  },
  reducers: {
    moveBotMenu(state, action) {
      state.botMenu = action.payload.botMenu;
    },
  },
});
export const menuActions = menuSlice.actions;
export default menuSlice;
