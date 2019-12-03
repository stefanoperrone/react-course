export const mapDispatchToProps = dispatch => {
  return {
    setValue: () => dispatch({ type: "ADD" }),
    unSetValue: () => dispatch({ type: "REMOVE" })
  };
};
