import Logo from "./Logo";
import Menu from "./Menu";
import Setting from "./Setting";

const NavBigScreen: React.FC = () => {
  return (
    <nav
      className="
  2xl:h-[144px]
  xl:h-[128px]
  2xl:rounded-3xl
  lg:h-[110px]
  md:h-[92px]
  lg:rounded-xl
  sm:h-[70px]
  h-[48px] 
  rounded-lg
  w-full 
  bg-primary-transparent
  flex
  justify-center
  content-center
"
    >
      <div
        className="
        2xl:mx-16
        2xl:my-24
        2xl:h-[96px]
        xl:mx-12
        xl:my-20
        xl:h-[86px]
        lg:mx-10
        lg:my-16
        lg:h-[76px]
        md:mx-6
        md:my-12
        md:h-[65px]
        sm:mx-3
        sm:my-8
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
        <div className="">
          <Setting />
          <Menu />
        </div>
      </div>
    </nav>
  );
};
export default NavBigScreen;
