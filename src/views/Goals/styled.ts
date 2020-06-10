import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddButton = styled(Link)`
  width: 142px;
  min-height: 142px;
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
