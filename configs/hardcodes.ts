import { TMenuButtonData, TNameStyle, TStrings } from "@/types/general";
import { addDispatchProp } from "@/utils/generalFunctions";
import { actions } from "./actions";
import { ModalActions } from "@/store/Slices/ModalsSlice";

export const menuTexts: TMenuButtonData[] = [
  {
    text: {
      name: "دسته بندی",
    },
    icon: {
      name: "soghati-menu-hamburger-o",
      styles: "font-bold ml-4",
    },
    onClick: addDispatchProp(ModalActions.showOn(actions.grouping)),
  },
  {
    text: {
      name: "وبلاگ",
    },
  },
  {
    text: {
      name: "درباره ما",
    },
  },
  {
    text: {
      name: "تماس با ما",
    },
  },
  {
    text: {
      name: "تعرفه آگهی ها",
    },
  },
  {
    text: {
      name: "راهنمای درج آگهی",
    },
  },
  {
    text: {
      name: "استخدام در هلدینگ",
    },
  },
];

export const mobileMenuTexts: TMenuButtonData[] = [
  {
    text: {
      name: "دسته بندی",
      styles: "text-[14px]",
    },
    icon: {
      name: "soghati-menu-hamburger-o",
      styles: "font-bold ml-4",
    },
    onClick: addDispatchProp(ModalActions.showOn(actions.grouping)),
  },
  {
    text: {
      name: "درج آگهی",
      styles: "text-[14px]",
    },
    icon: {
      name: "soghati-plus-o",
      styles: " ml-4",
    },
  },
  {
    text: {
      name: "ثبت نام /ورود",
      styles: "text-[14px]",
    },
    icon: {
      name: "soghati-vector-o",
      styles: " ml-4",
    },
  },
  {
    text: {
      name: "استخدام در هلدینگ",
      styles: "text-[14px]",
    },
  },
  {
    text: {
      name: "راهنمای درج آگهی",
      styles: "text-[14px]",
    },
  },
  {
    text: {
      name: "تعرفه آگهی ها",
      styles: "text-[14px]",
    },
  },
  {
    text: {
      name: "تماس با ما",
      styles: "text-[14px]",
    },
  },
  {
    text: {
      name: "درباره ما",
      styles: "text-[14px]",
    },
  },
  {
    text: {
      name: "وبلاگ",
      styles: "text-[14px]",
    },
  },
];
export const modalTypes: TStrings = {
  menu: "menu",
  group: "group",
};
// home icon doesn't exist on public must be fixed
export const botMenuIcons: TNameStyle[] = [
  {
    name: "home",
    styles: "soghati-Home-4",
  },
  {
    name: "grouping",
    styles: "soghati-menu-hamburger-o",
  },
  {
    name: "search",
    styles: "soghati-search-2-o",
  },
  {
    name: "addAd",
    styles: "soghati-add-o",
  },
  {
    name: "profile",
    styles: "soghati-profile",
  },
];

export const botMenuCard = [
  {
    img: "./assets/images/footerLogo.svg",
    text: "        بزرگترین سامانه کارآفرینی و ایجاد اشتغال جوانان و دانشجویان ایران در فضای مجازی و واقعی ایران، در زمینه تبلیغات، خرید و فروش،",
  },
  {
    img: "./assets/images/footerLogo.svg",
    text: "        بزرگترین سامانه کارآفرینی و ایجاد اشتغال جوانان و دانشجویان ایران در فضای مجازی و واقعی ایران، در زمینه تبلیغات، خرید و فروش،",
  },
];
export const botMenuLogoes: string[] = [
  "./assets/images/footerLogo (1).svg",
  "./assets/images/footerLogo (2).svg",
  "./assets/images/footerLogo (1).svg",
  "./assets/images/footerLogo (2).svg",
];
