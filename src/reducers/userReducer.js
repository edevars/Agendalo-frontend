import { USER_LOGIN } from "../types/userTypes";

const INITIAL_STATE = {
  user: {
    name: "",
    email: "",
    token: ""
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { user: action.payload };

    default:
      return state;
  }
};
