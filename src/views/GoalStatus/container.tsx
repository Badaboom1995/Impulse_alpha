import React from "react";
import { GoalStatusWrapper, GoalStatusItem } from "./styled";

function GoalStatus(props) {
  return (
    <GoalStatusWrapper>
      {props.challengeStatus.map((item, index) => (
        <GoalStatusItem key={index} status={item.status} />
      ))}
    </GoalStatusWrapper>
  );
}

export default GoalStatus;
