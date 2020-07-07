import React from "react";
import Container from "./container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import generalActions from "src/redux/modules/general/generalActions";
import userActions from "src/redux/modules/user/userActions";

function Auth() {
  let history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      email: Yup.string()
        .email("invalid email")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .min(5, "Password is too short - should be 5 chars minimum.")
    }),
    onSubmit: values => {
      dispatch(userActions.createUser(values));
      dispatch(generalActions.openAlert());
      console.log(values);
      setTimeout(() => {
        history.push("/goals");
      }, 500);
    }
  });

  return <Container formik={formik} />;
}
export default Auth;
