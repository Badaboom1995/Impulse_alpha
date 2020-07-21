import {
  CREATE_USER,
  GET_PROFILE,
  GetProfileAction,
  CreateUserAction
} from "./actionTypes";
import { User } from "./types";

const createUser = (user: User): CreateUserAction => ({
  type: CREATE_USER,
  user
});
const getProfile = (): GetProfileAction => ({
  type: GET_PROFILE
});

export default {
  createUser,
  getProfile
};
