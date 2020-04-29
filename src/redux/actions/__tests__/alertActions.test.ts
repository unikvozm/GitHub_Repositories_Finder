import * as AlertActions from "../alertActions";
import { AlertActionType } from "../../../types/actionTypes";

describe("AlertActions work correctly", () => {
  test("Show Alert", () => {
    expect(AlertActions.showAlert("test")).toEqual({
      type: AlertActionType.SHOW_ALERT,
      payload: "test"
    });
  });

  test("Hide Alert", () => {
    expect(AlertActions.hideAlert()).toEqual({
      type: AlertActionType.HIDE_ALERT
    });
  });
});
