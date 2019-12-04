export function rootReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, value: state.value + 1 };
    case "REMOVE":
      return { ...state, value: state.value - 1 };
    case "SAVE_PERSON":
      return { ...state, people: [...state.people, action.person] };
    default:
      return state;
  }
}
