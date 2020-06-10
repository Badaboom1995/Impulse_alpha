import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

const Help = styled(HelpOutlineOutlinedIcon)`
  padding: 5px;
  font-size: 20px;
  position: absolute;
  right: -25px;
`;

export default function Hint(props) {
  return (
    <Tooltip title={props.children}>
      <Help color="action" style={{ fontSize: 17 }} />
    </Tooltip>
  );
}
