const spinnerReducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { loading: true };
    case "STOP_LOADING":
      return { loading: false };
    default:
      return state;
  }
};

export default spinnerReducer;