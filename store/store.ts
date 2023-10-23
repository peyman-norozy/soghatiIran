import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./Slices/menuSlice";
import windowSlice from "./Slices/windowSlice";
import ModalSlice from "./Slices/ModalsSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    windowSize: windowSlice.reducer,
    modal: ModalSlice.reducer,
  },
});
export type TStoreState = ReturnType<typeof store.getState>;
export const globalState = store.getState;

export default store;
