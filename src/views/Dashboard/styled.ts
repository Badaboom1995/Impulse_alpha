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

export const GoalsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const GoalStatusWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
export const Button = styled.button`
  width: 142px;
  height: 142px;
  margin-right: 7px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-image: url("./plus.svg");
  background-color: #78bc61aa;
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  cursor: pointer;
  &:hover {
    background-color: #78bc61;
  }
`;
