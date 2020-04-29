import { Action } from "redux";
import { LicenseType } from "./LicenseType";
import { UrlQueries } from "./urlQueriesType";

export enum LoaderActionType {
  SHOW_LOADER = "SHOW_LOADER",
  HIDE_LOADER = "HIDE_LOADER"
}

export enum AlertActionType {
  SHOW_ALERT = "SHOW_ALERT",
  HIDE_ALERT = "HIDE_ALERT"
}

export enum ReposActionType {
  FETCH_REPOS = "FETCH_REPOS",
  REQUEST_REPOS = "REQUEST_REPOS",
  UPDATE_ITEMS_COUNT = "UPDATE_ITEMS_COUNT"
}

export enum FormActionType {
  UPDATE_SEARCH = "UPDATE_SEARCH",
  UPDATE_LICENSE = "UPDATE_LICENSE",
  UPDATE_PAGE = "UPDATE_PAGE",
  UPDATE_PER_PAGE = "UPDATE_PER_PAGE",
  UPDATE_ITEMS_COUNT = "UPDATE_ITEMS_COUNT"
}

export interface LoaderAction extends Action {
  type: LoaderActionType;
}

export interface AlertAction extends Action {
  type: AlertActionType;
  payload?: string;
}

export interface FormAction extends Action {
  type: FormActionType;
  payload: string | number | LicenseType;
}

export interface ReposAction extends Action {
  type: ReposActionType;
  payload: UrlQueries;
}
