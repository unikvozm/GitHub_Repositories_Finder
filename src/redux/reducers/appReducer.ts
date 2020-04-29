import { AppState } from "../../types/StateInterfaces";
import {
  LoaderActionType,
  LoaderAction,
  AlertAction,
  AlertActionType
} from "../../types/actionTypes";

const initialState = {
  loading: false
};

export const appReducer = (
  state: AppState = initialState,
  action: LoaderAction | AlertAction
) => {
  switch (action.type) {
    case LoaderActionType.SHOW_LOADER:
      return { ...state, loading: true };
    case LoaderActionType.HIDE_LOADER:
      return { ...state, loading: false };
    case AlertActionType.SHOW_ALERT:
      return { ...state, alert: action.payload };
    case AlertActionType.HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
