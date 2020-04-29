import { FormState } from "../../types/StateInterfaces";
import { FormAction, FormActionType } from "../../types/actionTypes";

const initialState: FormState = {
  search: "",
  license: undefined,
  page: 1,
  per_page: 30,
  items_count: 0
};

export const formReducer = (
  state: FormState = initialState,
  action: FormAction
) => {
  switch (action.type) {
    case FormActionType.UPDATE_SEARCH:
      return { ...state, search: action.payload };
    case FormActionType.UPDATE_LICENSE:
      return { ...state, license: action.payload };
    case FormActionType.UPDATE_PAGE:
      return { ...state, page: action.payload };
    case FormActionType.UPDATE_PER_PAGE:
      return { ...state, per_page: action.payload };
    case FormActionType.UPDATE_ITEMS_COUNT:
      return {
        ...state,
        items_count: action.payload > 1000 ? 1000 : action.payload
      };
    default:
      return state;
  }
};
