import { Goal } from "./types";
import { ADD_GOAL, REMOVE_GOAL, GoalsActionTypes } from "./actionTypes";

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
      name: "string",
      description: "string",
      time: "string"
    },
    state: [
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" },
      { status: "coming" }
    ]
  }
];

export function goalsReducer(state = initialState, action: GoalsActionTypes) {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.goal];
    case REMOVE_GOAL:
      return state.filter(item => item.id != action.id);
    default:
      return state;
  }
}
