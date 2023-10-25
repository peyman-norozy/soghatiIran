import { ModalActions } from "@/store/Slices/ModalsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Grouping: React.FC<{ show: boolean }> = ({ show }) => {
  const dispatch = useDispatch();
  const [headNum, setHeadNum] = useState<1 | 2 | 3>(1);
  return (
    <div
      className={`
        ${show ? "sm:w-[75%] w-full" : "w-0"}
        2xl:rounded-3xl
        lg:rounded-xl
        2xl:h-[calc(100%-176px)]
        xl:h-[calc(100%-144px)]
        lg:h-[calc(100%-124px)]
        md:h-[calc(100%-122px)]
        sm:h-[calc(100%-110px)]
        h-[90%]
        bg-primary-white
        fixed
        justify-self-center
        sm:mr-[12.5%]
        z-50
        sm:rounded-[16px]
        sm:bottom-0
        overflow-hidden
        `}
    >
      <div className="flex justify-between py-[4vh] px-[4vw]">
        <ul className="flex lg:w-[40%] sm:w-[60%] w-[100%] W-between">
          <li
            className={`
            sm:w-[27%]
            cursor-pointer
            pb-[20px]
             ${headNum === 1 ? "border-b-[2px] border-primary-red" : ""}
            `}
            onClick={() => setHeadNum(1)}
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
            ${headNum === 2 ? "border-primary-red border-b-[2px]" : ""}`}
            onClick={() => setHeadNum(2)}
          >
            صنایع دستی
          </li>
          <li
            className={`
            sm:w-[27%]
            cursor-pointer
            p-b-[20px]
            mr-[7vw]
            sm:mr-2
            ${headNum === 3 ? "border-primary-red border-b-[2px]" : ""}`}
            onClick={() => setHeadNum(3)}
          >
            آثار هنری
          </li>
        </ul>
        <button
          onClick={() => {
            console.log("working");
            dispatch(ModalActions.showOff());
          }}
        >
          <i className="soghati-arrow-o"></i>
        </button>
      </div>
      <ol></ol>
    </div>
  );
};
export default Grouping;
