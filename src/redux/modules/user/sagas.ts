import UserService from "src/services/user";
import { CREATE_USER, USER_SAVED } from "./actionTypes";

import { put, takeEvery, all } from "redux-saga/effects";

function* userSaved(action) {
  const Request = new UserService();
  const user = yield Request.createUser(action.user);
  yield put({ type: USER_SAVED, user });
}

function* createUserWatch() {
  yield takeEvery(CREATE_USER, userSaved);
}

export default function* userSaga() {
  yield all([createUserWatch()]);
}
