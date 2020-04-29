import { combineReducers } from "redux";
import { reposReducer } from "./reposReducer";
import { formReducer } from "./formReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  repos: reposReducer,
  form: formReducer,
  app: appReducer
});
