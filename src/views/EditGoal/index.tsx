import React from "react";
import Container from "./container";
import generalActions from "src/redux/modules/general/generalActions";
import goalsActions from "src/redux/modules/goals/goalsActions";
import { useDispatch } from "react-redux";
import { Goal } from "src/redux/modules/goals/types";

interface EditGoalInterface {
  goal: Goal;
}

function EditGoal(props: EditGoalInterface) {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(goalsActions.removeGoal(id));
    dispatch(generalActions.openAlert("success", "success"));
  };
  return <Container goal={props.goal} handleDelete={handleDelete} />;
}
export default EditGoal;
