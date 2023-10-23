import MenuLi from "./MenuLi";
import { menuTexts, mobileMenuTexts } from "@/configs/hardcodes";
import { ModalActions } from "@/store/Slices/ModalsSlice";
import { TMenuButtonData } from "@/types/general";
import { useDispatch } from "react-redux";

export const MobileMenu: React.FC<{ show: boolean }> = ({ show }) => {
  const dispatch = useDispatch();

  return (
    <ul
      className={`
      ${show ? "mr-0" : "mr-[-392px]"}
      flex
      px-[26px] py-[40px]
      fixed
      flex-col 
      bg-primary-white 
      h-full
      w-[392px]
      duration-500
      z-50
      justify-between
    `}
    >
      <div
        className="
        flex
        justify-between
        mb-40
      "
      >
        <div></div>
        <img
          src="/assets/icons/Logo.svg"
          alt="Logo"
          className="          w-[50px]
          h-[40px]"
        />
        <button
          className={`
            text-[14px]
            flex
            items-center
            hover:opacity-50
          `}
          onClick={(event) => {
            dispatch(ModalActions.showOff());
          }}
        >
          <i className={"soghati-arrow-o"}></i>
        </button>
      </div>
      {mobileMenuTexts.map((item: TMenuButtonData, index: number) => {
        return (
          <>
            {index === 3 ? (
              <div className="h-[1px] w-full bg-primary-gary my-[16px]"></div>
            ) : null}
            <MenuLi
              text={item.text}
              icon={item.icon}
              key={`mobile-menu${index}`}
            />
          </>
        );
      })}
    </ul>
  );
};
const Menu: React.FC = () => {
  return (
    <ul className="flex lg:max-w-[756px] max-w-[500px] justify-between">
      {menuTexts.map((item: TMenuButtonData, index: number) => {
        return (
          <MenuLi text={item.text} icon={item.icon} key={`web-menu${index}`} />
        );
      })}
    </ul>
  );
};
export default Menu;
