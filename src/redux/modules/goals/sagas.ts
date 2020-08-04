import { put, takeEvery, all, select } from "redux-saga/effects";
import moment from "moment";
import {
  GOALS_FETCHED,
  FETCH_GOALS,
  ADD_GOAL,
  GOAL_ADDED,
  GOAL_REMOVED,
  REMOVE_GOAL,
  GOAL_UPDATED,
  CHANGE_CURRENT_STATUS
} from "./actionTypes";
import GoalsService from "src/services/goals";
import { END_LOADING, START_LOADING } from "../general/actionTypes";

function* goalsFetched() {
  yield put({ type: START_LOADING, loadingType: "globalLoading" });
  const Request = new GoalsService();
  const goals = yield Request.fetchGoals();
  const goalsHandled = goals.map(item => ({ ...item, id: item._id }));
  yield put({ type: END_LOADING, loadingType: "globalLoading" });
  yield put({ type: GOALS_FETCHED, goals: goalsHandled });
}
function* watchGoalsFetch() {
  yield takeEvery(FETCH_GOALS, goalsFetched);
}

function* goalAdded(action) {
  yield put({ type: START_LOADING });
  const Request = new GoalsService();
  const goal = yield Request.createGoal(action.goal);
  goal.id = goal._id;
  yield put({ type: END_LOADING });
  yield put({ type: GOAL_ADDED, goal });
}
function* watchAddGoal() {
  yield takeEvery(ADD_GOAL, goalAdded);
}

function* goalUpdated(action) {
  const goals = yield select(state => state.goals);
  const currentGoal = goals.find(item => item.id === action.goalId);
  const newState = currentGoal.state.map(item => {
    const today = moment().format();
    return moment(item.date).isSame(today, "day") && item.status === "coming"
      ? { ...item, status: action.status }
      : item;
  });
  const Request = new GoalsService();
  const updatedGoal = yield Request.updateGoal(currentGoal._id, {
    state: newState
  });
  updatedGoal.id = updatedGoal._id;
  yield put({ type: GOAL_UPDATED, goal: updatedGoal });
}
function* watchUpdateGoal() {
  yield takeEvery(CHANGE_CURRENT_STATUS, goalUpdated);
}

function* goalRemoved(action) {
  const Request = new GoalsService();
  const goal = yield Request.deleteGoal(action.id);
  yield put({ type: GOAL_REMOVED, id: goal._id });
}
function* watchRemoveGoal() {
  yield takeEvery(REMOVE_GOAL, goalRemoved);
}

export default function* goalsSaga() {
  yield all([
    watchGoalsFetch(),
    watchAddGoal(),
    watchRemoveGoal(),
    watchUpdateGoal()
  ]);
}
