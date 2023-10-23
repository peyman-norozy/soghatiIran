import { windowActions } from "@/store/Slices/windowSlice";
import { TSizeOBJ } from "@/types/general";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useWindowSize(): TSizeOBJ {
  let width = 0;
  let height = 0;
  const hasWindow = typeof window !== "undefined";
  const dispatch = useDispatch();
  if (hasWindow) {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  useEffect(() => {
    dispatch(
      windowActions.updateSize({
        height,
        width,
      })
    );
    window.addEventListener("resize", () => {
      dispatch(
        windowActions.updateSize({
          height: window.innerHeight,
          width: window.innerWidth,
        })
      );
    });
  }, []);
  return {
    width,
    height,
  };
}

export default useWindowSize;
