import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Wrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
`;
export const Nav = styled.nav`
  background-color: #292f36;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  box-sizing: border-box;
  height: 100vh;
  width: 170px;
  margin: 0;
  padding-top: 30px;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ListItem = styled.li`
  width: 100%;
`;
export const Link = styled(NavLink)`
  color: #f4f4f9;
  font-size: 16px;
  font-family: "Roboto";
  text-decoration: none;
  display: block;
  padding: 10px;
  margin: 5px auto;
  width: 90%;
  box-sizing: border-box;

  &:hover {
    background-color: #373c3e;
    border-radius: 5px;
  }
`;
export const Main = styled.div`
  height: 100vh;
  overflow: scroll;
  background-color: #f9f8f8;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const MainBody = styled.div`
  padding: 20px;
  display: block;
  flex-grow: 1;
`;
