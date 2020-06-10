import { OPEN_ALERT, CLOSE_ALERT, GeneralActionTypes } from "./actionTypes";

const initialState = {
  alertOpen: false
};

export function generalReducer(
  state = initialState,
  action: GeneralActionTypes
) {
  switch (action.type) {
    case OPEN_ALERT:
      return { ...state, alertOpen: true };
    case CLOSE_ALERT:
      return { ...state, alertOpen: false };
    default:
      return state;
  }
}
