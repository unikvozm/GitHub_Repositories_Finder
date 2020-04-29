import * as LoaderActions from "../loaderActions";
import { LoaderActionType } from "../../../types/actionTypes";

describe("LoaderActions work correctly", () => {
  test("showLoader works", () => {
    expect(LoaderActions.showLoader()).toEqual({
      type: LoaderActionType.SHOW_LOADER
    });
  });

  test("hideLoader works", () => {
    expect(LoaderActions.hideLoader()).toEqual({
      type: LoaderActionType.HIDE_LOADER
    });
  });
});
