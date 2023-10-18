import { TComponentChildrenProp } from "@/types/general";
import { responsiveSize } from "@/utils/styleFunctions";

const MenuLi: React.FC<TComponentChildrenProp> = ({ children }) => {
  console.log(
    responsiveSize({ upSize: 16, downSize: 10, styleType: "text-xs" })
  );
  return (
    <li>
      <a
        className="
          2xl:text-[16px] 
          xl:text-[14.8px]
          lg:text-[13.6px]
          md:text-[12.4]
          sm:text-[11.2px]
          "
      >
        {children}
      </a>
    </li>
  );
};
export default MenuLi;
