import { TMenuButtonProps } from "@/types/general";
import Link from "next/link";

const MenuLi: React.FC<TMenuButtonProps> = ({
  children,
  text,
  icon,
  onClick,
}) => {
  return (
    <li
      className=""
      onClick={() => {
        onClick ? onClick() : null;
      }}
    >
      <Link className={`flex items-center ${text?.styles}`} href="/">
        {icon ? <i className={`${icon.name} ${icon.styles}`}></i> : null}
        <p>{text?.name}</p>
        {children}
      </Link>
    </li>
  );
};
export default MenuLi;
