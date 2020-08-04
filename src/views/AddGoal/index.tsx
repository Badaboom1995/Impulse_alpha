import React from "react";
import Container from "./container";
import { useFormik } from "formik";
import * as Yup from "yup";
import goalsActions from "src/redux/modules/goals/goalsActions";
import generalActions from "src/redux/modules/general/generalActions";
import { useDispatch } from "react-redux";
import { Status } from "src/redux/modules/goals/types";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import moment from "moment";

function AddGoal() {
  let history = useHistory();
  const makeGoalState = (duration: string) => {
    let state: Status[] = [];
    for (let i = 0; i < parseInt(duration); i++) {
      state.push({
        status: "coming",
        date: moment()
          .add(i, "days")
          .format()
      });
    }
    return state;
  };
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      duration: "",
      actionName: "",
      actionDesc: "",
      actionTime: "",
      reminder: "",
      skip: "",
      reviewTime: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      description: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      duration: Yup.string().required("Required")
    }),
    onSubmit: values => {
      const { skip, actionName, actionDesc, actionTime, duration } = values;
      const goal = {
        ...values,
        id: uuid(),
        skip: skip === "1" ? [0, 1] : [0, 2],
        completed: false,
        action: { name: actionName, description: actionDesc, time: actionTime },
        state: makeGoalState(duration)
      };
      dispatch(goalsActions.addGoal(goal));
      dispatch(generalActions.openAlert("success", "success"));
      setTimeout(() => {
        history.push("/goals");
      }, 500);
    }
  });
  return <Container formik={formik} />;
}
export default AddGoal;
