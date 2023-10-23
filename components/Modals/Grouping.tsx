const Grouping: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <div
      className={`
        ${show ? "sm:w-[75%] w-full" : "w-0"}
        2xl:h-[484px]
        xl:h-[486px]
        lg:h-[520px]
        md:h-[521.5px]
        sm:h-[534px]
        h-[90%]
        bg-primary-white
        fixed
        justify-self-center
        sm:mr-[12.5%]
        z-50
        sm:rounded-[16px]
        sm:bottom-0
        `}
    >
      <div className="flex justify-between py-[40px] px-[48px]">
        <ul className="flex lg:w-[40%] sm:w-[60%] w-[100%] W-between">
          <li
            className={`
            sm:w-[27%]
            cursor-pointer
            pb-[20px]
            border-b-[2px]
             ${true ? "border-primary-red" : ""}
            `}
          >
            خوراکی
          </li>
          <li
            className={`
            sm:w-[27%]
            cursor-pointer
            p-b-[20px]
            mr-[7vw]
            sm:mr-0
            ${false ? "border-primary-red border-b-[2px]" : ""}
            `}
          >
            صنایع دستی
          </li>
          <li
            className={`
            sm:w-[27%]
            cursor-pointer
            p-b-[20px]
            mr-[7vw]
            ${false ? "border-primary-red border-b-[2px]" : ""}
            `}
          >
            آثار هنری
          </li>
        </ul>
        <button>
          <i className="soghati-arrow-o"></i>
        </button>
      </div>
      <ol></ol>
    </div>
  );
};
export default Grouping;
