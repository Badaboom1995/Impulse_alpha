import { put } from "redux-saga/effects";
import { OPEN_ALERT } from "../modules/general/actionTypes";

export const errorAlert = message =>
  put({
    type: OPEN_ALERT,
    alertType: "error",
    alertMessage: message
  });

export const successAlert = () =>
  put({
    type: OPEN_ALERT,
    alertType: "success",
    alertMessage: "Success!"
  });
