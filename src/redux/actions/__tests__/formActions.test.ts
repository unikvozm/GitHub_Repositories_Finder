import * as FormActions from "../formActions";
import { FormActionType } from "../../../types/actionTypes";
import { LicenseType } from "../../../types/LicenseType";

describe("FormActions work correctly", () => {
  test("updateSearch works", () => {
    expect(FormActions.updateSearch("test")).toEqual({
      type: FormActionType.UPDATE_SEARCH,
      payload: "test"
    });
  });

  test("updateLicense works", () => {
    expect(
      FormActions.updateLicense(LicenseType["Academic Free License v3.0"])
    ).toEqual({
      type: FormActionType.UPDATE_LICENSE,
      payload: LicenseType["Academic Free License v3.0"]
    });
  });

  test("updatePage works", () => {
    expect(FormActions.updatePage(5)).toEqual({
      type: FormActionType.UPDATE_PAGE,
      payload: 5
    });
  });

  test("updatePerPage works", () => {
    expect(FormActions.updatePerPage(5)).toEqual({
      type: FormActionType.UPDATE_PER_PAGE,
      payload: 5
    });
  });

  test("updateItemCount works", () => {
    expect(FormActions.updateItemCount(5)).toEqual({
      type: FormActionType.UPDATE_ITEMS_COUNT,
      payload: 5
    });
  });
});
