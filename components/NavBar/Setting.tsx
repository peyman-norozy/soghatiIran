import ButtonIcon from "../UI/ButtonIcon";
import Search from "./Search";

const AdButton: React.FC = () => {
  return (
    <button
      className="
    bg-primary-red
    text-primary-white
      xl:p-8
      md:p-5
      sm:p-1
      rounded-lg
      xl:w-[102px]
      lg:w-[80px]
      md:w-[70px]
      w-[80px]
      sm:w-[67px]
      2xl:h-40
      xl:h-[37px]
      flex
      justify-between
      text-[0.875rem]
      text-end
      "
    >
      <i
        className="
        text-[1rem]
        font-bold
        soghati-plus-o 
       text-primary-red
       bg-white
        p-[2.5px]
        rounded-md
        "
      ></i>
      <p className="">درج آگهی</p>
    </button>
  );
};
const SignButton: React.FC = () => {
  return <ButtonIcon text="ثبت نام / ورود" icon="soghati-profile" />;
};
const LangButton: React.FC = () => {
  return <ButtonIcon text="EN/فا" icon="soghati-vector-o" />;
};
const Setting: React.FC = () => {
  return (
    <div
      className="
    flex 
    justify-between 
    w-full 
    "
    >
      <Search />
      <div className="flex items-center md:gap-x-16 gap-x-4">
        <LangButton />
        <SignButton />
        <AdButton />
      </div>
    </div>
  );
};
export default Setting;
