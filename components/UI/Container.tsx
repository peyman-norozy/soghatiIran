import { TComponentChildrenProp, TSizeOBJ } from "@/types/general";
import { responsiveSize } from "@/utils/styleFunctions";

const Container: React.FC<TComponentChildrenProp> = ({ children }) => {
  return (
    <div
      className="
      2xl:mx-[70px] 
      xl:mx-[60px]
      lg:mx-[50px]
      md:mx-[40]
      sm:mx-[30px]
      mx-[20px]
      "
    >
      {children}
    </div>
  );
};
export default Container;
