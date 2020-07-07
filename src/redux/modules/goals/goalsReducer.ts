import { Goal } from "./types";
import {
  ADD_GOAL,
  REMOVE_GOAL,
  CHANGE_CURRENT_STATUS,
  GoalsActionTypes
} from "./actionTypes";
import moment from "moment";
const initialState: Goal[] = [
  {
    id: "asd",
    name: "string",
    description: "string",
    completed: false,
    duration: "7",
    skip: [0, 2],
    reviewTime: "string",
    action: {
      name: "Action name",
      description: "Description",
      time: "string"
    },
    state: [
      { status: "completed", date: "2020-06-11T14:41:15+08:00" },
      { status: "completed", date: "2020-06-12T14:41:15+08:00" },
      { status: "completed", date: "2020-06-13T14:41:15+08:00" },
      { status: "skipped", date: "2020-06-14T14:41:15+08:00" },
      { status: "completed", date: "2020-06-15T14:41:15+08:00" },
      { status: "coming", date: "2020-06-16T14:41:15+08:00" },
      { status: "coming", date: "2020-06-17T14:41:15+08:00" },
      { status: "coming", date: "2020-06-18T14:41:15+08:00" },
      { status: "coming", date: "2020-06-19T14:41:15+08:00" },
      { status: "coming", date: "2020-06-20T14:41:15+08:00" }
    ]
  }
];

export function goalsReducer(state = initialState, action: GoalsActionTypes) {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.goal];
    case REMOVE_GOAL:
      return state.filter(item => item.id !== action.id);
    case CHANGE_CURRENT_STATUS:
      return state.map(item => {
        if (item.id !== action.goalId) return item;
        const newState = item.state.map(item => {
          const today = moment().format();
          return moment(item.date).isSame(today, "day") &&
            item.status === "coming"
            ? { ...item, status: action.status }
            : item;
        });
        return { ...item, state: newState };
      });
    default:
      return state;
  }
}
