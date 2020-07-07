import React from "react";
import TextInput from "src/views/Forms/TextInput";
import Button from "@material-ui/core/Button";
import { MainTitle } from "src/views/typography";
import { Card } from "../shared";
const Auth = (props: AuthInterface) => {
  const { formik } = props;
  return (
    <Card modal noHover>
      <form onSubmit={formik.handleSubmit}>
        <MainTitle>Auth</MainTitle>
        <TextInput
          formik={formik}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.description}
          name={"name"}
          fullWidth
        >
          Name
        </TextInput>
        <TextInput
          formik={formik}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.description}
          name={"email"}
          fullWidth
        >
          Email
        </TextInput>
        <TextInput
          formik={formik}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.description}
          name={"password"}
          fullWidth
        >
          Password
        </TextInput>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default Auth;

interface AuthInterface {
  formik: any;
}
