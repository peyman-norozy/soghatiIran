import Logo from "./Logo";
import NavContainer from "./NavContainer";
import { useDispatch } from "react-redux";
import { ModalActions } from "@/store/Slices/ModalsSlice";
import { modalTypes } from "@/configs/hardcodes";

const NavSmallScreen: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <NavContainer>
      <div
        className="        
        w-full
        flex
        items-center
        justify-between
        "
      >
        <button
          className="flex items-center"
          onClick={() => {
            dispatch(
              ModalActions.showOn({ modalType: modalTypes.menu, show: true })
            );
          }}
        >
          <i className="soghati-menu-hamburger-o sm:text-[40px] text-[25px]"></i>
        </button>
        <Logo />
        <button className="flex items-center">
          <i className="soghati-location-o sm:text-[45px] text-[25px]"></i>
        </button>
      </div>
    </NavContainer>
  );
};
export default NavSmallScreen;
