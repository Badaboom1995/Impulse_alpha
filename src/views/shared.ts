import styled from "styled-components";
import { darken } from "polished";

const chooseButtonColor = type => {
  switch (type) {
    case "primary":
      return "#4ECDC4";
    case "succes":
      return "#419D78";
    case "warning":
      return "#FF9505";
    case "danger":
      return "#EC4E20";
    case "link":
      return "transparent";
    case "dangerLink":
      return "transparent";
    default:
      return "#008DD5";
  }
};
export const Button = styled.button`
  padding: 10px;
  margin-right: 7px;
  margin-bottom: ${props => (props.stickBottom ? "0px" : "10px")};
  border: none;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: ${props => chooseButtonColor(props.type)};
  color: ${props => (props.type === "dangerLink" ? "#EC4E20" : "#fff")};
  cursor: pointer;
  &:hover {
    background-color: ${props => darken(0.08, chooseButtonColor(props.type))};
  }
`;
export const TextButton = styled.button`
  margin-right: 7px;
  border: none;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: ${props => (props.type === "danger" ? "#EC4E20" : "#fff")};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.width || "100%"};
`;
export const Row = styled(FlexWrapper)`
  margin-bottom: 15px;
`;

export const Card = styled.div`
  position:relative; 
  ${props =>
    props.modal &&
    `
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%);
    min-width: 300px;
    width: auto;
  `}
  padding: ${props => (props.modal ? "20px" : "15px")};
  margin-right: 10px;
  background-color: #fff;
  display: ${props => (props.display === "flex" ? "flex" : "inline-block")};
  flex-direction: ${props => (props.column ? "column" : "row")};
  width: 142px;
  box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: ${props => !props.noHover && "pointer"};
  &:hover {
    box-shadow: ${props =>
      !props.noHover &&
      "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"};
  }
`;
