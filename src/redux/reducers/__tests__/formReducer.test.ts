import { formReducer } from "../formReducer";
import { FormActionType } from "../../../types/actionTypes";
import { FormState } from "../../../types/StateInterfaces";

describe("formReducer", () => {
  const defaultState: FormState = {
    search: "",
    license: null,
    page: 1,
    per_page: 30,
    items_count: 0
  };

  test("update search", () => {
    const action = {
      type: FormActionType.UPDATE_SEARCH,
      payload: "test"
    };
    expect(formReducer(undefined, action)).toMatchObject({ search: "test" });
  });

  test("update license", () => {
    const action = {
      type: FormActionType.UPDATE_LICENSE,
      payload: "test"
    };
    expect(formReducer(undefined, action)).toMatchObject({ license: "test" });
  });

  test("update page", () => {
    const action = {
      type: FormActionType.UPDATE_PAGE,
      payload: 100
    };
    expect(formReducer(undefined, action)).toMatchObject({ page: 100 });
  });

  test("update per_page", () => {
    const action = {
      type: FormActionType.UPDATE_PER_PAGE,
      payload: 100
    };
    expect(formReducer(undefined, action)).toMatchObject({ per_page: 100 });
  });

  test("update items count", () => {
    const action = {
      type: FormActionType.UPDATE_ITEMS_COUNT,
      payload: 100
    };
    expect(formReducer(undefined, action)).toMatchObject({ items_count: 100 });
  });

  test("default action", () => {
    const action = {
      type: "something else",
      payload: "test"
    };
    expect(formReducer(undefined, action)).toMatchObject(defaultState);
  });
});
