import { ReposActionType } from "../../types/actionTypes";
import { UrlQueries } from "../../types/urlQueriesType";

export function fetchRepos(formQueries: UrlQueries) {
  return {
    type: ReposActionType.REQUEST_REPOS,
    payload: formQueries
  };
}
