import { ReposState } from "../../types/StateInterfaces";
import { ReposActionType, ReposAction } from "../../types/actionTypes";

const initialState: ReposState = {
  repos: []
};

export const reposReducer = (state = initialState, action: ReposAction) => {
  switch (action.type) {
    case ReposActionType.FETCH_REPOS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
};
