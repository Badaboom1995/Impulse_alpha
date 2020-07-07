import React from "react";
import { AddButton } from "./styled";
import { FlexWrapper, Row } from "src/views/shared";
import { MainTitle } from "src/views/typography";
import { useSelector } from "react-redux";
import GoalCard from "src/views/GoalCard";
import EditGoal from "src/views/EditGoal";
import Modal from "src/views/Modal";
import { StatusValue } from "src/redux/modules/goals/types";
import DailyActionCard from "./DailyActionCard";
import { v4 as uuid } from "uuid";

function Container(props: GoalsPropsInterface) {
  const goals = useSelector((state: any) => state.goals);
  const { changeActionStatus, getDailyActions } = props;
  return (
    <FlexWrapper>
      <MainTitle>Today</MainTitle>
      <Row>
        {getDailyActions(goals).length
          ? getDailyActions(goals).map(item => {
              return (
                <DailyActionCard
                  key={uuid()}
                  item={item}
                  changeActionStatus={changeActionStatus}
                />
              );
            })
          : "No more actions today!"}
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

interface GoalsPropsInterface {
  checkDailyActionStatus: (any) => boolean;
  changeActionStatus: (goalId: string, status: StatusValue) => void;
  getDailyActions: any;
}
