import React from "react";
import Container from "./container";
import moment from "moment";
import { useDispatch } from "react-redux";
import goalsActions from "src/redux/modules/goals/goalsActions";
import generalActions from "src/redux/modules/general/generalActions";

function Goals() {
  const dispatch = useDispatch();
  const checkDailyActionStatus = (goalStatusArray: Array<any>): boolean => {
    const currentAction = goalStatusArray.find(item => {
      const today = moment().format();
      return moment(item.date).isSame(today, "day") && item.status === "coming";
    });
    return Boolean(currentAction);
  };
  const getDailyActions = (goals: Array<any>): Array<any> => {
    const activeDailyActions = goals.reduce((accum, value) => {
      return checkDailyActionStatus(value.state)
        ? [...accum, { ...value.action, id: value.id }]
        : accum;
    }, []);
    return activeDailyActions;
  };
  const changeActionStatus = (goalId, status) => {
    dispatch(goalsActions.changeCurrentStatus(goalId, status));
    dispatch(generalActions.openAlert());
  };
  return (
    <Container
      changeActionStatus={changeActionStatus}
      checkDailyActionStatus={checkDailyActionStatus}
      getDailyActions={getDailyActions}
    />
  );
}
export default Goals;
