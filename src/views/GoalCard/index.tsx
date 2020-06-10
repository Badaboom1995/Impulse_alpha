import React from "react";
import Container from "./container";

interface GoalCardProps {
  index: number;
  children?: any;
  goal: Object;
}

function GoalCard(props: GoalCardProps) {
  return <Container goal={props.goal} />;
}
export default GoalCard;
