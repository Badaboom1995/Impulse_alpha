import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Hint from "./Hint";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Wrapper = styled.div`
  margin-right: ${props => props.hint && "15px"};
  margin-bottom: ${props => props.last && "25px"};
`;
export default function SimpleSelect(props) {
  const classes = useStyles();
  const {
    hint,
    last,
    children,
    currentValue,
    handleChange,
    name,
    values,
    helper
  } = props;
  return (
    <Wrapper hint={hint} last={last}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">
          {children || "Select"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={currentValue}
          onChange={handleChange}
          name={name}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {values.map((item, index) => (
            <MenuItem key={index} value={item.value.toString()}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        {helper && <FormHelperText>{helper}</FormHelperText>}
        {hint && <Hint>{hint}</Hint>}
      </FormControl>
    </Wrapper>
  );
}
