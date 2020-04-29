import { reposReducer } from "../reposReducer";
import { ReposActionType } from "../../../types/actionTypes";

describe("reposReducer", () => {
  const defaultState = {
    repos: []
  };

  test("update search", () => {
    const dataToFetch = { search: "test", page: 10, per_page: 10 };

    const action = {
      type: ReposActionType.FETCH_REPOS,
      payload: dataToFetch
    };
    expect(reposReducer(undefined, action)).toMatchObject({
      repos: dataToFetch
    });
  });

  test("default action", () => {
    const action = {
      type: "something else",
      payload: "test"
    };
    expect(reposReducer(undefined, action)).toMatchObject(defaultState);
  });
});
