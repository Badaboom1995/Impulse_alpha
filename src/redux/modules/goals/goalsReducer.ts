import { Goal } from "./types";
import {
  ADD_GOAL,
  REMOVE_GOAL,
  CHANGE_CURRENT_STATUS,
  FETCH_GOALS,
  GOALS_FETCHED,
  GoalsActionTypes,
  GOAL_ADDED,
  GOAL_REMOVED,
  GOAL_UPDATED
} from "./actionTypes";
const initialState: Goal[] = [];

export function goalsReducer(state = initialState, action: GoalsActionTypes) {
  switch (action.type) {
    case ADD_GOAL:
      return state;
    case GOAL_ADDED:
      return [...state, action.goal];
    case REMOVE_GOAL:
      return state;
    case GOAL_REMOVED:
      return state.filter(item => item.id !== action.id);
    case FETCH_GOALS:
      return state;
    case GOALS_FETCHED:
      return [...state, ...action.goals];
    case CHANGE_CURRENT_STATUS:
      return state;
    case GOAL_UPDATED:
      console.log(action.goal);
      return state.map(item =>
        item.id === action.goal.id ? action.goal : item
      );
    default:
      return state;
  }
}
