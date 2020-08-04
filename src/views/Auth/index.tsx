import React from "react";
import Container from "./container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
      name: Yup.string().required("Required"),
      email: Yup.string()
        .email("invalid email")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .min(1, "Password is too short - should be 7 chars minimum.")
    }),
    onSubmit: values => {
      dispatch(userActions.createUser(values, history));
      console.log(values);
    }
  });

  return <Container formik={formik} />;
}
export default Auth;
