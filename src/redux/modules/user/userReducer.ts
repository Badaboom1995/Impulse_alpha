import {
  CREATE_USER,
  USER_SAVED,
  GET_PROFILE,
  GOT_PROFILE_INFO,
  LOG_OUT,
  LOGGED_OUT
} from "./actionTypes";

const initialState = {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return state;
    case USER_SAVED:
      return { ...state, ...action.user };
    case GET_PROFILE:
      return state;
    case GOT_PROFILE_INFO:
      return { ...state, ...action.user };
    case LOG_OUT:
      return state;
    case LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
