import { USER_LOGIN, USER_ERROR, USER_SIGNUP } from "../types/userTypes";

const INITIAL_STATE = {
  user: {
    id: "",
    name: "",
    email: "",
    token: ""
  },
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };

    case USER_SIGNUP:
      return state;

    case USER_ERROR:
      return { ...state, error: action.payload };
      
    default:
      return state;
  }
};
