export const mapDispatchToProps = dispatch => {
  return {
    setValue: () => dispatch({ type: "ADD" }),
    unSetValue: () => dispatch({ type: "REMOVE" }),
    savePerson: person => dispatch({ type: "SAVE_PERSON", person })
  };
};
