import { Action, Dispatch } from "@reduxjs/toolkit";

export function addDispatchProp(
  action: Action
): (dispatch: Dispatch<Action<any>>) => void {
  function a(dispatch: Dispatch<Action>) {
    console.log(dispatch);
    console.log(action);
    dispatch(action);
  }
  return a;
}
