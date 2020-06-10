import React from "react";
import { AddButton } from "./styled";
import { Card, FlexWrapper, Button, TextButton, Row } from "src/views/shared";
import {
  MainTitle,
  SecondaryTitle,
  ParagraphSmall
} from "src/views/typography";
import { useSelector } from "react-redux";
import GoalCard from "src/views/GoalCard";
import EditGoal from "src/views/EditGoal";
import Modal from "src/views/Modal";

function Container() {
  const goals = useSelector((state: any) => state.goals);
  const actions = [
    { name: "Evening reading", description: "reading 10 minutes before sleep" },
    { name: "Morning Excersize", description: "10 minutes excersize" },
    {
      name: "Healthy brekfast",
      description: "Avo toast or oatmeal with fruits"
    }
  ];
  return (
    <FlexWrapper>
      <MainTitle>Today</MainTitle>
      <Row>
        {console.log(goals)}
        {actions.map((item, index) => (
          <Card noHover display="flex" column key={index}>
            <SecondaryTitle>{item.name}</SecondaryTitle>
            <ParagraphSmall pushBottom>{item.description}</ParagraphSmall>
            <Button>Check</Button>
            <TextButton type="danger">Skip</TextButton>
          </Card>
        ))}
      </Row>
      <Row>
        <MainTitle>Goals</MainTitle>
        {goals.map((item, index) => (
          <Modal key={index} body={<EditGoal goal={item}></EditGoal>}>
            <GoalCard goal={item} key={index} index={index}></GoalCard>
          </Modal>
        ))}
        <AddButton to="/add_goal"></AddButton>
      </Row>
    </FlexWrapper>
  );
}
export default Container;
