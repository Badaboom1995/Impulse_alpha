import React from "react";
import { Card, Button, TextButton } from "src/views/shared";
import { SecondaryTitle, ParagraphSmall } from "src/views/typography";
import { StatusValue } from "src/redux/modules/goals/types";
import { v4 as uuid } from "uuid";

function DailyActionCard(props: DailyActionPropsInterface) {
  const { changeActionStatus, item } = props;
  return (
    <Card noHover display="flex" column key={uuid()}>
      <SecondaryTitle>{item.name}</SecondaryTitle>
      <ParagraphSmall pushBottom>{item.description}</ParagraphSmall>
      <Button
        onClick={() => {
          changeActionStatus(item.id, "completed");
        }}
      >
        Check
      </Button>
      <TextButton
        type="danger"
        onClick={() => {
          changeActionStatus(item.id, "skipped");
        }}
      >
        Skip
      </TextButton>
    </Card>
  );
}
export default DailyActionCard;

interface DailyActionPropsInterface {
  changeActionStatus: (goalId: string, status: StatusValue) => void;
  item: any;
}
