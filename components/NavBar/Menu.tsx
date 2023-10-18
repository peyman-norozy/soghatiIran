import { responsiveSize } from "@/utils/styleFunctions";
import Search from "./Search";
import MenuLi from "./MenuLi";

const Menu: React.FC = () => {
  return (
    <div>
      <ul className="flex">
        <MenuLi>دسته بندی</MenuLi>
        <MenuLi>وبلاگ</MenuLi>
        <MenuLi>درباره ما</MenuLi>
        <MenuLi>تماس با ما</MenuLi>
        <MenuLi>تعرفه آگهی ها</MenuLi>
        <MenuLi>راهنمای درج آگهی</MenuLi>
        <MenuLi>استخدام در هلدینگ</MenuLi>
      </ul>
    </div>
  );
};
export default Menu;
