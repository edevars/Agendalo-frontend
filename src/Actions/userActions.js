import axios from "axios";
import { USER_LOGIN, USER_ERROR, USER_SIGNUP } from "../types/userTypes";

export const userLogin = (email, password) => async dispatch => {
  console.log("quiere hacer login con:", email, password);
  try {
    const response = await axios({
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

    const { data } = response;

    const newUser = {
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
      type: USER_ERROR,
      payload: error.message
    });
  }
};

export const userSignUp = (name, email, password) => async dispatch => {
  try {
    const response = await axios({
      url: "http://localhost:8000/api/auth/sign-up",
      method: "post",
      data: {
        name,
        email,
        password
      }
    });

    if (response.status === 201) {
      dispatch(userLogin(email, password)).then(() =>
        dispatch({
          type: USER_SIGNUP
        })
      );
    }
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error.message
    });
  }
};
