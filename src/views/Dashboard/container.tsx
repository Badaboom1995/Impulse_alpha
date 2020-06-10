import React from "react";
import { GoalsList } from "./styled";
import { MainTitle } from "src/views/typography";
import { Button } from "./styled";
import GoalCard from "src/views/GoalCard";

function DashboadContainer() {
  const goals = [{ name: "goal1" }, { name: "goal2" }, { name: "goal3" }];
  const challengeStatus = [
    { status: "completed" },
    { status: "completed" },
    { status: "completed" },
    { status: "skipped" },
    { status: "completed" },
    { status: "completed" },
    { status: "completed" },
    { status: "skipped" },
    { status: "completed" },
    { status: "completed" },
    { status: "completed" },
    { status: "completed" },
    { status: "completed" },
    { status: "skipped" },
    { status: "skipped" },
    { status: "completed" },
    { status: "completed" },
    { status: "coming" },
    { status: "coming" },
    { status: "coming" },
    { status: "coming" }
  ];
  return (
    <GoalsList>
      <MainTitle>Active goals</MainTitle>
      {goals.map((item, index) => (
        <GoalCard key={index} index={index} goal={{}}>
          }>
        </GoalCard>
      ))}
      <Button />
    </GoalsList>
  );
}

export default DashboadContainer;
