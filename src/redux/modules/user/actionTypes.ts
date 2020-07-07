import { User } from "./types";

export const CREATE_USER = "user/CREATE_USER";
export const USER_SAVED = "user/USER_SAVED";

export interface CreateUserAction {
  type: typeof CREATE_USER;
  user: User;
}

export type GoalsActionTypes = CreateUserAction;
