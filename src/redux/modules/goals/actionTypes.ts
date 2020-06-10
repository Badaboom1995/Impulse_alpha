import { Goal } from "./types";

export const ADD_GOAL = "goals/ADD_GOAL";
export const REMOVE_GOAL = "goals/REMOVE_GOAL";

export interface AddGoalAction {
  type: typeof ADD_GOAL;
  goal: Goal;
}
export interface RemoveGoalAction {
  type: typeof REMOVE_GOAL;
  id: string;
}

export type GoalsActionTypes = AddGoalAction | RemoveGoalAction;
