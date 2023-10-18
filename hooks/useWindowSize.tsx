import { TSizeOBJ } from "@/types/general";
import { useEffect } from "react";

const useWindowSize = (): TSizeOBJ => {
  const hasWindow = typeof window !== "undefined";

  let size: TSizeOBJ = {
    width: 0,
    height: 0,
    unit: "px",
  };
  function getWindowDimensions(): TSizeOBJ {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
      width,
      height,
    };
  }
  if (hasWindow) {
    size = getWindowDimensions();
    window.addEventListener("resize", () => {
      size = getWindowDimensions();
    });
  }
  return size;
};

export default useWindowSize;
