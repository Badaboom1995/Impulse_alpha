import {
  OPEN_ALERT,
  CLOSE_ALERT,
  GeneralActionTypes,
  END_LOADING,
  START_LOADING
} from "./actionTypes";

const initialState = {
  alertOpen: false,
  alertType: "",
  globalloading: false,
  localLoading: false
};

export function generalReducer(
  state = initialState,
  action: GeneralActionTypes
) {
  switch (action.type) {
    case OPEN_ALERT:
      return {
        ...state,
        alertOpen: true,
        alertType: action.alertType,
        alertMessage: action.alertMessage
      };
    case CLOSE_ALERT:
      return { ...state, alertOpen: false, alertType: "" };
    case START_LOADING:
      return { ...state, [action.loadingType.toString()]: true };
    case END_LOADING:
      return { ...state, [action.loadingType.toString()]: false };
    default:
      return state;
  }
}
