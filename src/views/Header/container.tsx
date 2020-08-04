import React from "react";
import { MainHeader, UserBlock, Avatar } from "./styled";
import { Label } from "src/views/typography";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

function Container(props: HeaderInterface) {
  const userName = useSelector((state: any) => state.user.name);
  return (
    <MainHeader>
      <UserBlock>
        <Button onClick={props.logOut}>Log out</Button>
        <Avatar></Avatar>
        <Label>{userName || "UserName"}</Label>
      </UserBlock>
    </MainHeader>
  );
}
export default Container;

interface HeaderInterface {
  logOut: () => void;
}
