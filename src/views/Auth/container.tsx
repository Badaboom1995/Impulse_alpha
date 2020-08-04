import React from "react";
import TextInput from "src/views/Forms/TextInput";
import Button from "@material-ui/core/Button";
import { MainTitle } from "src/views/typography";
import { Card } from "../shared";
import { useSelector } from "react-redux";

const Auth = (props: AuthInterface) => {
  const { formik } = props;
  const isLoading = useSelector((state: any) => state.general.localLoading);
  const ButtonText = isLoading ? "Loading..." : "Submit";
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
          {ButtonText}
        </Button>
      </form>
    </Card>
  );
};

export default Auth;

interface AuthInterface {
  formik: any;
}
