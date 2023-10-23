import { TMenuButtonProps } from "@/types/general";

const MenuLi: React.FC<TMenuButtonProps> = ({ children, text, icon }) => {
  return (
    <li className="">
      <a className={`flex items-center ${text?.styles}`} href="/">
        {icon ? <i className={`${icon.name} ${icon.styles}`}></i> : null}
        <p>{text?.name}</p>
        {children}
      </a>
    </li>
  );
};
export default MenuLi;
