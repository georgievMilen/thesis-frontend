const Reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "login":
      return {
        logged: action.payload
      };
    case "logout":
      return {
        logged: action.payload
      };
    default:
      return state;
  }
};

export { Reducer };
