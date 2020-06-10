import React from "react";
import { GoalsList } from "./styled";
import { SecondaryTitle, Label } from "src/views/typography";
import { Card } from "src/views/shared";
import GoalStatus from "src/views/GoalStatus";

function GoalCard(props) {
  const { name, state, skip } = props.goal;
  return (
    <GoalsList>
      <Card>
        <SecondaryTitle>{name}</SecondaryTitle>
        <GoalStatus challengeStatus={state} />
        <Label>skips: {`${skip[0]}/${skip[1]}`}</Label>
      </Card>
    </GoalsList>
  );
}

export default GoalCard;
