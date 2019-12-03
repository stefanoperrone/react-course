export function rootReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return { value: state.value + 1 };
    case "REMOVE":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
