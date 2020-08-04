import {
  CREATE_USER,
  GET_PROFILE,
  LOG_OUT,
  GetProfileAction,
  CreateUserAction,
  LogOutAction
} from "./actionTypes";
import { User } from "./types";

const createUser = (user: User, history): CreateUserAction => ({
  type: CREATE_USER,
  user,
  history
});
const getProfile = (): GetProfileAction => ({
  type: GET_PROFILE
});
const logOut = (): LogOutAction => ({
  type: LOG_OUT
});

export default {
  createUser,
  getProfile,
  logOut
};
