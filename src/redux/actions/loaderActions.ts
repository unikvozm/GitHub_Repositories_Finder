import { LoaderAction, LoaderActionType } from "../../types/actionTypes";

export function showLoader(): LoaderAction {
  return {
    type: LoaderActionType.SHOW_LOADER
  };
}

export function hideLoader(): LoaderAction {
  return {
    type: LoaderActionType.HIDE_LOADER
  };
}
