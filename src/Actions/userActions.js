import axios from "axios";
import { USER_LOGIN } from "../types/userTypes";

export const userLogin = (email, password) => async (dispatch, getState) => {
  const { user } = getState().userReducer;

  try {
    const { data } = await axios({
      url: "http://localhost:8000/api/auth/sign-in",
      method: "post",
      data: {
        apiKeyToken:
          "093aa6395dc44a2705bbea2440fd4cb084b79519c21c580c4eddfad7a4758a99"
      },
      auth: {
        username: email,
        password
      }
    });

    const newUser = {
      ...user,
      id: data.user.id,
      email: data.user.email,
      name: data.user.name,
      token: data.token
    };

    dispatch({
      type: USER_LOGIN,
      payload: newUser
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN,
      payload: user
    });
  }
};
