const ButtonIcon: React.FC<{
  text: string;
  icon: string;
  function?: any;
  distance?: {
    web?: number;
    mobile?: number;
  };
}> = ({ text, icon, function: any, distance = { web: 8, mobile: 4 } }) => {
  return (
    <button
      className="
      flex
      items-center
      text-primary-black
        "
    >
      {/* this span is not part of page */}
      {/* it is declaring classes that may needed for tailwind */}
      {/* <span
        className="lg:ml-4 ml-4
      lg:ml-5 ml-5
      lg:ml-6 ml-6
      lg:ml-7 ml-7
      lg:ml-8 ml-8
      lg:ml-3 ml-3
      lg:ml-2 ml-2
      lg:ml-1 ml-1
      hidden"
      ></span> */}
      <i
        className={`
        ${icon}
        text-[20px]
        lg:ml-${distance.web}
        ml-${distance.mobile}
        `}
      ></i>
      <p>{text}</p>
    </button>
  );
};
export default ButtonIcon;
