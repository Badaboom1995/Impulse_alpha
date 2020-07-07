import { combineReducers } from "redux";
import { userReducer } from "./modules/user/userReducer";
import { goalsReducer } from "./modules/goals/goalsReducer";
import { generalReducer } from "./modules/general/generalReducer";
import { all } from "redux-saga/effects";
import goalsSaga from "./modules/goals/sagas";
import userSaga from "./modules/user/sagas";

export function* rootSaga() {
  yield all([goalsSaga(), userSaga()]);
}

export const rootReducer = combineReducers({
  user: userReducer,
  goals: goalsReducer,
  general: generalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
