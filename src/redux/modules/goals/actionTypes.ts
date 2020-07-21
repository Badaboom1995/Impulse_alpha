import { Goal } from "./types";

export const ADD_GOAL = "goals/ADD_GOAL";
export const GOAL_ADDED = "goals/GOAL_ADDED";
export const REMOVE_GOAL = "goals/REMOVE_GOAL";
export const GOAL_REMOVED = "goals/GOAL_REMOVED";
export const GOAL_UPDATED = "goals/GOAL_UPDATED";
export const FETCH_GOALS = "goals/FETCH_GOALS";
export const GOALS_FETCHED = "goals/GOALS_FETCHED";
export const CHANGE_CURRENT_STATUS = "goals/CHANGE_CURRENT_STATUS";

export interface AddGoalAction {
  type: typeof ADD_GOAL;
  goal: Goal;
}
export interface GoalAddedAction {
  type: typeof GOAL_ADDED;
  goal: Goal;
}
export interface RemoveGoalAction {
  type: typeof REMOVE_GOAL;
  id: string;
}
export interface GoalRemovedAction {
  type: typeof GOAL_REMOVED;
  id: string;
}
export interface FetchGoalsAction {
  type: typeof FETCH_GOALS;
}
export interface GoalsFetchedAction {
  type: typeof GOALS_FETCHED;
  goals: any;
}
export interface ChangeCurrentStatus {
  type: typeof CHANGE_CURRENT_STATUS;
  status: string;
  goalId: string;
}
export interface GoalUpdatedAction {
  type: typeof GOAL_UPDATED;
  goal: any;
}

export type GoalsActionTypes =
  | AddGoalAction
  | RemoveGoalAction
  | ChangeCurrentStatus
  | FetchGoalsAction
  | GoalsFetchedAction
  | GoalAddedAction
  | GoalRemovedAction
  | GoalUpdatedAction;
