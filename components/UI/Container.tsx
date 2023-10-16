import { TComponentChildrenProp } from "@/types/general";

const Container: React.FC<TComponentChildrenProp> = ({ children }) => {
  return <div className="px-[70px]">{children}</div>;
};
export default Container;
