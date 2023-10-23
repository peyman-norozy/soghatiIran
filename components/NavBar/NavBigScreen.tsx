import Logo from "./Logo";
import Menu from "./Menu";
import NavContainer from "./NavContainer";
import Setting from "./Setting";

const NavBigScreen: React.FC = () => {
  return (
    <NavContainer>
      <div
        className="
        2xl:mx-16
        2xl:my-20
        2xl:h-[96px]
        xl:mx-12
        xl:my-16
        xl:h-[86px]
        lg:mx-10
        lg:my-12
        lg:h-[76px]
        md:mx-6
        md:my-8
        md:h-[65px]
        sm:mx-3
        sm:my-4
        sm:h-[53px]
        h-[40px]
        mx-0 
        my-4
        w-full
        flex
        items-center
        "
      >
        <Logo />
        <div className="w-full h-full flex flex-col justify-between">
          <Setting />
          <Menu />
        </div>
      </div>
    </NavContainer>
  );
};
export default NavBigScreen;
