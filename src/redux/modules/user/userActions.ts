import { CREATE_USER, CreateUserAction } from "./actionTypes";
import { User } from "./types";

const createUser = (user: User): CreateUserAction => ({
  type: CREATE_USER,
  user
});

export default {
  createUser
};
