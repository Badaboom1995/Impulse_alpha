import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const Wrapper = styled.div`
  position: relative;
  display: block;
  padding-top: 6px;
  margin-bottom: 15px;
  margin-right: 15px;
  font-family: "Roboto", "Segoe UI";
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
`;
const Input = styled(TextField)`
  width: ${props => (props.fullWidth ? "100%" : "auto")};
`;

const SignupForm = props => {
  const id = uuidv4();
  const isError = Boolean(
    props.formik.touched[props.name] && props.formik.errors[props.name]
  );
  const errorText = props.formik.errors[props.name];
  return (
    <Wrapper>
      <Input
        error={isError}
        helperText={errorText}
        id={id}
        name={props.name}
        type={props.type ? props.type : "text"}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formik.values[props.name]}
        label={props.children}
        fullWidth={props.fullWidth}
      />
    </Wrapper>
  );
};

export default SignupForm;
