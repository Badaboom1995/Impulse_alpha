import UserService from "src/services/user";
import {
  CREATE_USER,
  USER_SAVED,
  GOT_PROFILE_INFO,
  GET_PROFILE,
  LOG_OUT,
  LOGGED_OUT
} from "./actionTypes";
import { OPEN_ALERT, START_LOADING, END_LOADING } from "../general/actionTypes";
import { put, takeEvery, all } from "redux-saga/effects";
import {
  errorAlert,
  successAlert
} from "src/redux/reduxServices/sagasServices";

// FUNCTIONS
function* userSaved(action) {
  yield put({ type: START_LOADING, loadingType: "localLoading" });
  const Request = new UserService();
  const result = yield Request.createUser(action.user);
  yield put({ type: END_LOADING, loadingType: "localLoading" });
  if (!result.user) {
    const errMessage = result.message || result.errmsg;
    yield errorAlert(errMessage);
    return;
  }
  yield successAlert();
  action.history.push("/goals");
  localStorage.setItem("impulseJWT", result.token);
  yield put({ type: USER_SAVED, user: result.user });
}

function* gotProfileInfo() {
  if (!localStorage.impulseJWT) return;
  const Request = new UserService();
  const user = yield Request.getProfile();
  yield put({ type: GOT_PROFILE_INFO, user });
}
function* loggedOut() {
  if (!localStorage.impulseJWT) return;
  const Request = new UserService();
  const user = yield Request.logOut();

  localStorage.removeItem("impulseJWT");
  yield put({ type: LOGGED_OUT, user });
}

// WATCHERS
function* createUserWatch() {
  yield takeEvery(CREATE_USER, userSaved);
}
function* getProfileWatch() {
  yield takeEvery(GET_PROFILE, gotProfileInfo);
}
function* logOutWatch() {
  yield takeEvery(LOG_OUT, loggedOut);
}

export default function* userSaga() {
  yield all([createUserWatch(), getProfileWatch(), logOutWatch()]);
}
