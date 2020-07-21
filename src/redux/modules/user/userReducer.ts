import {
  CREATE_USER,
  USER_SAVED,
  GET_PROFILE,
  GOT_PROFILE_INFO
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
    default:
      return state;
  }
}
