import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "src/views/Forms/TextInput";
import SimpleSelect from "src/views/Forms/Select";
import Radio from "src/views/Forms/Radio";
import Button from "@material-ui/core/Button";
import { FlexWrapper } from "src/views/shared";
import { MainTitle } from "src/views/typography";
import { timesArray } from "src/constants";
import { DeleteButton } from "./styled";
import { Goal } from "src/redux/modules/goals/types";

interface EditGoalInterface {
  handleDelete: Function;
  goal: Goal;
}

const SignupForm = (props: EditGoalInterface) => {
  const { handleDelete, goal } = props;
  const formik = useFormik({
    initialValues: {
      name: "Goal one",
      description: "Desc one",
      duration: "14",
      actionName: "asd",
      actionDesc: "qwe",
      actionTime: "13:00",
      reminder: "12:00",
      skip: "1",
      reviewTime: "12:00"
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
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <MainTitle>Add new goal</MainTitle>
      <DeleteButton
        onClick={() => {
          handleDelete(goal.id);
        }}
        color="secondary"
        fontSize="medium"
      ></DeleteButton>
      <TextInput
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        name={"name"}
        value={formik.values.name}
        formik={formik}
      >
        Name
      </TextInput>
      <TextInput
        formik={formik}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.description}
        name={"description"}
      >
        Description
      </TextInput>
      <Radio
        handleChange={formik.handleChange}
        mainLabel="Duration"
        name="duration"
        value={formik.values.duration}
        buttons={[
          { label: "1 week", value: "7" },
          { label: "2 weeks", value: "14" },
          { label: "3 weeks", value: "21" },
          { label: "1 month", value: "30" }
        ]}
      />
      <FlexWrapper>
        <TextInput
          formik={formik}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.actionName}
          name={"actionName"}
        >
          Action name
        </TextInput>
        <TextInput
          formik={formik}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.actionDesc}
          name={"actionDesc"}
        >
          Action description
        </TextInput>
        <SimpleSelect
          name="actionTime"
          handleChange={formik.handleChange}
          values={timesArray}
          currentValue={formik.values.actionTime}
        >
          Action time
        </SimpleSelect>
        <SimpleSelect
          name="reminder"
          handleChange={formik.handleChange}
          values={timesArray}
          currentValue={formik.values.reminder}
        >
          Reminder
        </SimpleSelect>
      </FlexWrapper>
      <SimpleSelect
        name="skip"
        hint="Choose number of days you wish skip in a week"
        handleChange={formik.handleChange}
        currentValue={formik.values.skip}
        values={[
          { name: "One day", value: "1" },
          { name: "Two days", value: "2" }
        ]}
      >
        Skip
      </SimpleSelect>
      <SimpleSelect
        last
        name="reviewTime"
        handleChange={formik.handleChange}
        values={timesArray}
        currentValue={formik.values.reviewTime}
      >
        Review time
      </SimpleSelect>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default SignupForm;
