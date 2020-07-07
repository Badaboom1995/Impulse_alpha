import { CREATE_USER, USER_SAVED } from "./actionTypes";

const initialState = {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return state;
    case USER_SAVED:
      return { ...state, user: action.user };
    default:
      return state;
  }
}
