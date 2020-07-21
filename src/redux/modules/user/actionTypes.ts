import { User } from "./types";

export const CREATE_USER = "user/CREATE_USER";
export const USER_SAVED = "user/USER_SAVED";
export const GET_PROFILE = "user/GET_PROFILE";
export const GOT_PROFILE_INFO = "user/GOT_PROFILE_INFO";

export interface CreateUserAction {
  type: typeof CREATE_USER;
  user: User;
}
export interface GetProfileAction {
  type: typeof GET_PROFILE;
}

export type GoalsActionTypes = CreateUserAction;
