import { combineReducers } from "redux";
import { userReducer } from "./modules/user/userReducer";
import { goalsReducer } from "./modules/goals/goalsReducer";
import { generalReducer } from "./modules/general/generalReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  goals: goalsReducer,
  general: generalReducer
});

export type RootState = ReturnType<typeof rootReducer>;
