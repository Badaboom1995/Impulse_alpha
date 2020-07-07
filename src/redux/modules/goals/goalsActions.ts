import {
  ADD_GOAL,
  REMOVE_GOAL,
  CHANGE_CURRENT_STATUS,
  AddGoalAction,
  RemoveGoalAction,
  ChangeCurrentStatus
} from "./actionTypes";
import { Goal, StatusValue } from "./types";

const addGoal = (goal: Goal): AddGoalAction => ({
  type: ADD_GOAL,
  goal
});

const removeGoal = (id: string): RemoveGoalAction => ({
  type: REMOVE_GOAL,
  id
});
const changeCurrentStatus = (
  goalId: string,
  status: StatusValue
): ChangeCurrentStatus => ({
  type: CHANGE_CURRENT_STATUS,
  status,
  goalId
});

export default {
  addGoal,
  removeGoal,
  changeCurrentStatus
};
