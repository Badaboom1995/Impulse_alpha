import { put, takeEvery, all } from "redux-saga/effects";

function* valuesRecieved() {
  yield put({ type: "VALUES_RECIEVED" });
}

function* watchGetValues() {
  yield takeEvery("GET_VALUES", valuesRecieved);
}

export default function* goalsSaga() {
  yield all([watchGetValues()]);
}
