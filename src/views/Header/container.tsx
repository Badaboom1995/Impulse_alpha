import React from "react";
import { MainHeader, UserBlock, Avatar } from "./styled";
import { Label } from "src/views/typography";
import { useSelector } from "react-redux";
function Container() {
  const userName = useSelector((state: any) => state.user.name);
  return (
    <MainHeader>
      <UserBlock>
        <Avatar></Avatar>
        <Label>{userName || "UserName"}</Label>
      </UserBlock>
    </MainHeader>
  );
}
export default Container;
