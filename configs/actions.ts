import { TModalType } from "@/store/Slices/ModalsSlice";

export const actions: {
  [name: string]: {
    show: boolean;
    modalType: TModalType;
  };
} = {
  grouping: {
    show: true,
    modalType: "grouping",
  },
  menu: {
    show: true,
    modalType: "menu",
  },
};
