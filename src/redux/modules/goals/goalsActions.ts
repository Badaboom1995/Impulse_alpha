import {
  ADD_GOAL,
  REMOVE_GOAL,
  AddGoalAction,
  RemoveGoalAction
} from "./actionTypes";
import { Goal } from "./types";

const addGoal = (goal: Goal): AddGoalAction => ({
  type: ADD_GOAL,
  goal
});

const removeGoal = (id: string): RemoveGoalAction => ({
  type: REMOVE_GOAL,
  id
});

export default {
  addGoal,
  removeGoal
};
