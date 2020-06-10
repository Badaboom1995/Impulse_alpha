import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: block;
  padding-top: 20px;
  margin-bottom: 5px;
  /* padding: 20px 0px; */
  font-family: "Roboto", "Segoe UI";
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
`;

const Legend = styled(FormLabel)`
  margin-bottom: 10px;
`;

export default function RadioElem(props) {
  return (
    <Wrapper>
      <FormControl component="fieldset">
        <Legend component="legend">{props.mainLabel}</Legend>
        <RadioGroup
          row
          aria-label="position"
          name={props.name}
          defaultValue="top"
          value={props.value}
          onChange={props.handleChange}
        >
          {props.buttons.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item.value}
              control={<Radio color="primary" />}
              label={item.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Wrapper>
  );
}
