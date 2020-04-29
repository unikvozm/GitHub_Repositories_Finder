import { takeEvery, put, call, delay } from "redux-saga/effects";

import {
  ReposActionType,
  ReposAction,
  FormActionType
} from "../../types/actionTypes";
import { showLoader, hideLoader } from "../actions/loaderActions";
import { UrlQueries } from "../../types/urlQueriesType";
import { convertDataToUrl } from "../../utils/convertDataToUrl";
import { convertRepoToCardFormat } from "../../utils/convertRepoToCardFormat";
import { showAlert, hideAlert } from "../actions/alertActions";
import { ResponseType } from "../../types/RepoTypes";

export function* fetchReposWatcher() {
  yield takeEvery(ReposActionType.REQUEST_REPOS, fetchReposAsync);
}

export function* fetchReposAsync(action: ReposAction) {
  try {
    yield put(showLoader());
    const payload: ResponseType = yield call(fetchRepos, action.payload);
    yield put({
      type: ReposActionType.FETCH_REPOS,
      payload: convertRepoToCardFormat(payload.items)
    });
    yield put({
      type: FormActionType.UPDATE_ITEMS_COUNT,
      payload: payload.total_count
    });
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
    yield put(showAlert("Something went wrong"));
    yield put(hideLoader());
    yield delay(5000);
    yield put(hideAlert());
  }
}

async function fetchRepos(queries: UrlQueries) {
  const url: string = convertDataToUrl(queries);
  const response = await fetch(url);
  return await response.json();
}
