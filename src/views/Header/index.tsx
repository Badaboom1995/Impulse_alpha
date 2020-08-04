import React from "react";
import Container from "./container";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import userActions from "src/redux/modules/user/userActions";
import generalActions from "src/redux/modules/general/generalActions";

function Header() {
  const dispatch = useDispatch();
  let history = useHistory();
  const logOut = () => {
    dispatch(userActions.logOut());
    dispatch(generalActions.openAlert("success", "success"));
    setTimeout(() => {
      history.push("/");
    }, 500);
  };
  return <Container logOut={logOut} />;
}
export default Header;
