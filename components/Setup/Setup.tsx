import useWindowSize from "@/hooks/useWindowSize";
import { TStoreState } from "@/store/store";
import React, { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
// this component using for necessary background setups of all pages
const Setup: React.FC = () => {
  // const windowSize = useSelector((state: TStoreState) => state.windowSize);
  // this function is using for connecting redux to window's eventHandler
  useWindowSize();

  // classes that will run with functions must define
  // here because tailwind classes must define before first render
  // and cant be created when app is running
  return (
    <div
      className="w-0 h-0 hidden text-[14px]
  "
    ></div>
  );
};

export default Setup;
