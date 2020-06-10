import {
  OPEN_ALERT,
  CLOSE_ALERT,
  OpenAlertAction,
  CloseAlertAction
} from "./actionTypes";

const openAlert = (): OpenAlertAction => ({
  type: OPEN_ALERT
});
const closeAlert = (): CloseAlertAction => ({
  type: CLOSE_ALERT
});

export default {
  openAlert,
  closeAlert
};
