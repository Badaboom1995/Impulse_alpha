import {
  OPEN_ALERT,
  CLOSE_ALERT,
  OpenAlertAction,
  CloseAlertAction,
  StartLoadingAction,
  EndLoadingAction,
  START_LOADING,
  END_LOADING
} from "./actionTypes";

const openAlert = (alertType, alertMessage): OpenAlertAction => ({
  type: OPEN_ALERT,
  alertType,
  alertMessage
});
const closeAlert = (): CloseAlertAction => ({
  type: CLOSE_ALERT
});
const StartLoading = (loadingType): StartLoadingAction => ({
  type: START_LOADING,
  loadingType
});
const EndLoading = (loadingType): EndLoadingAction => ({
  type: END_LOADING,
  loadingType
});

export default {
  openAlert,
  closeAlert,
  StartLoading,
  EndLoading
};
