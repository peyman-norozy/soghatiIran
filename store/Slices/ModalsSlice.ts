import { createSlice } from "@reduxjs/toolkit";

type TModalType = "menu" | "grouping" | "";
const ModalSlice = createSlice({
  name: "window",
  initialState: { show: false } as { show: boolean; modalType: TModalType },
  reducers: {
    showOn(state, action) {
      state.show = true;
      state.modalType = action.payload.modalType;
    },
    showOff(state) {
      state.show = false;
      state.modalType = "";
      console.log("heiii");
    },
  },
});
export const ModalActions = ModalSlice.actions;
export default ModalSlice;
