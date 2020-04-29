import { appReducer } from "../appReducer";
import { LoaderActionType, AlertActionType } from "../../../types/actionTypes";

describe("appReducer", () => {
  const state = { loading: false };

  test("show loader", () => {
    const action = {
      type: LoaderActionType.SHOW_LOADER
    };
    expect(appReducer(undefined, action)).toEqual({ loading: true });
  });

  test("hide loader", () => {
    const action = {
      type: LoaderActionType.HIDE_LOADER
    };
    state.loading = true;
    expect(appReducer(state, action)).toEqual({ loading: false });
  });

  test("show alert", () => {
    const action = {
      type: AlertActionType.SHOW_ALERT,
      payload: "test"
    };
    expect(appReducer(state, action)).toMatchObject({ alert: "test" });
  });

  test("hide alert", () => {
    const action = {
      type: AlertActionType.HIDE_ALERT
    };
    expect(appReducer(state, action)).toMatchObject({ alert: null });
  });

  test("default action", () => {
    const action = {
      type: "something else",
      payload: "test"
    };
    expect(appReducer(state, action)).toMatchObject(state);
  });
});
