let userState;
if (window.localStorage.getItem("auth")) {
  userState = JSON.parse(window.localStorage.getItem("auth"));
  console.log('userstate',userState);
} else {
  userState = null; 
}

export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
