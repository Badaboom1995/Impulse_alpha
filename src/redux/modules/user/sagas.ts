import UserService from "src/services/user";
import {
  CREATE_USER,
  USER_SAVED,
  GOT_PROFILE_INFO,
  GET_PROFILE
} from "./actionTypes";

import { put, takeEvery, all } from "redux-saga/effects";

function* userSaved(action) {
  const Request = new UserService();
  const user = yield Request.createUser(action.user);
  localStorage.setItem("impulseJWT", user.token);
  yield put({ type: USER_SAVED, user });
}

function* gotProfileInfo() {
  if (!localStorage.impulseJWT) return;
  const Request = new UserService();
  const user = yield Request.getProfile();
  yield put({ type: GOT_PROFILE_INFO, user });
}

function* createUserWatch() {
  yield takeEvery(CREATE_USER, userSaved);
}
function* getProfileWatch() {
  yield takeEvery(GET_PROFILE, gotProfileInfo);
}

export default function* userSaga() {
  yield all([createUserWatch(), getProfileWatch()]);
}
