import { AlertActionType, AlertAction } from "../../types/actionTypes";

export function showAlert(text: string): AlertAction {
  return {
    type: AlertActionType.SHOW_ALERT,
    payload: text
  };
}

export function hideAlert(): AlertAction {
  return {
    type: AlertActionType.HIDE_ALERT
  };
}
