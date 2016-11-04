const TestReducer = (state = true, action ) => {
  switch (action.type) {
    case "test":
      return true;
    default:
      return state;  
  }

  return state;
}

export default TestReducer;