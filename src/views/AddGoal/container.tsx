import React from "react";
import TextInput from "src/views/Forms/TextInput";
import SimpleSelect from "src/views/Forms/Select";
import Radio from "src/views/Forms/Radio";
import Button from "@material-ui/core/Button";
import { FlexWrapper } from "src/views/shared";
import { MainTitle } from "src/views/typography";
import { timesArray } from "src/constants";

const SignupForm = (props: FormSetting) => {
  const { formik } = props;
  return (
    <form onSubmit={formik.handleSubmit}>
      <MainTitle>Add new goal</MainTitle>
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
        values={[
          { name: "One day", value: "1" },
          { name: "Two days", value: "2" }
        ]}
      >
        Skip
      </SimpleSelect>
      <SimpleSelect
        name="reviewTime"
        handleChange={formik.handleChange}
        values={timesArray}
        currentValue={formik.values.reviewTime}
        last
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

interface FormSetting {
  formik: any;
}
