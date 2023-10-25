import { createSlice } from "@reduxjs/toolkit";

export type TModalType = "menu" | "grouping" | "";
const ModalSlice = createSlice({
  name: "window",
  initialState: { show: false } as { show: boolean; modalType: TModalType },
  reducers: {
    showOn(state, action) {
      console.log("show on");
      console.log(action);
      state.show = action.payload.show;
      state.modalType = action.payload.modalType;
    },
    showOff(state) {
      console.log("show off");
      state.show = false;
      state.modalType = "";
    },
  },
});
export const ModalActions = ModalSlice.actions;
export default ModalSlice;
