import { Goal } from "./types";

export const ADD_GOAL = "goals/ADD_GOAL";
export const REMOVE_GOAL = "goals/REMOVE_GOAL";
export const CHANGE_CURRENT_STATUS = "goals/CHANGE_CURRENT_STATUS";

export interface AddGoalAction {
  type: typeof ADD_GOAL;
  goal: Goal;
}
export interface RemoveGoalAction {
  type: typeof REMOVE_GOAL;
  id: string;
}
export interface ChangeCurrentStatus {
  type: typeof CHANGE_CURRENT_STATUS;
  status: string;
  goalId: string;
}

export type GoalsActionTypes =
  | AddGoalAction
  | RemoveGoalAction
  | ChangeCurrentStatus;
