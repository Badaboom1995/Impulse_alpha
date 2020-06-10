import React from "react";
import Container from "./container";
interface GoalCardProps {
  challengeStatus: Array<any>;
}
function GoalStatus(props: GoalCardProps) {
  return <Container challengeStatus={props.challengeStatus} />;
}
export default GoalStatus;
