const initialState = {};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOG_IN":
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case "LOG_OUT":
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
}
