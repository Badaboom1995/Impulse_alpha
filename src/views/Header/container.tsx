import React from "react";
import { MainHeader, UserBlock, Avatar } from "./styled";
import { Label } from "src/views/typography";
function Container() {
  return (
    <MainHeader>
      <UserBlock>
        <Avatar></Avatar>
        <Label>user name</Label>
      </UserBlock>
    </MainHeader>
  );
}
export default Container;
