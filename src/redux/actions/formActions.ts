import { FormActionType } from "../../types/actionTypes";
import { LicenseType } from "../../types/LicenseType";

export function updateSearch(value: string) {
  return {
    type: FormActionType.UPDATE_SEARCH,
    payload: value
  };
}

export function updateLicense(value: LicenseType) {
  return {
    type: FormActionType.UPDATE_LICENSE,
    payload: value
  };
}

export function updatePage(value: number) {
  return {
    type: FormActionType.UPDATE_PAGE,
    payload: value
  };
}

export function updatePerPage(value: number) {
  return {
    type: FormActionType.UPDATE_PER_PAGE,
    payload: value
  };
}

export function updateItemCount(value: number) {
  return {
    type: FormActionType.UPDATE_ITEMS_COUNT,
    payload: value
  };
}
