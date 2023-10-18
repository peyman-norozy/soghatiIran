import Search from "./Search";

const Setting: React.FC = () => {
  return (
    <div className="flex justify-between">
      <Search />
      <div>
        <button>درج آگهی</button>
        <button>ثبت نام / ورود</button>
        <button>EN/فا</button>
      </div>
    </div>
  );
};
export default Setting;
