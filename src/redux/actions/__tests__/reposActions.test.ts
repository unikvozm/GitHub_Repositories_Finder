import * as ReposActions from "../reposActions";
import { ReposActionType } from "../../../types/actionTypes";

describe("ReposActions work correctly", () => {
  const frmDetails = {
    search: "test",
    per_page: 5,
    page: 5
  };
  test("fetchRepos works", () => {
    expect(ReposActions.fetchRepos(frmDetails)).toEqual({
      type: ReposActionType.REQUEST_REPOS,
      payload: frmDetails
    });
  });
});
