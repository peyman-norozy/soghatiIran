import { responsiveSize } from "@/utils/styleFunctions";

const NavContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <nav
      className="
    2xl:h-[136px]
    xl:h-[120px]
    2xl:rounded-3xl
    lg:h-[100px]
    md:h-[82px]
    lg:rounded-xl
    sm:h-[70px]
    h-[48px]
    rounded-lg
    w-11/12
   bg-primary-transparent
    flex
    justify-center
    content-center
    fixed
    "
    >
      {children}
    </nav>
  );
};
export default NavContainer;
