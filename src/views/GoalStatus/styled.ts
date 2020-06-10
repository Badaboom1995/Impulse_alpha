import styled from "styled-components";

const chooseColor = status => {
  switch (status) {
    case "completed":
      return "#4B4B4B";
    case "skipped":
      return "#D86363";
    case "coming":
      return "transparent";
    default:
      break;
  }
};

export const GoalStatusWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 140px;
  margin-bottom: 15px;
`;
export const GoalStatusItem = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: ${props => {
    return chooseColor(props.status);
  }};
  border: ${props => (props.status === "coming" ? "1px solid #000" : "none")};
`;
