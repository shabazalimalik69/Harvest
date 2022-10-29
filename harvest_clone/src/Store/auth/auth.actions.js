import axios from "axios";
import {
  AUTH_SIGNIN_ERROR,
  AUTH_SIGNIN_LOADING,
  AUTH_SIGNIN_SUCCESS,
  AUTH_SIGNOUT,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
} from "./auth.types";

export const signinAPI = (userData) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNIN_LOADING });
  try {
    let response = await axios.post(
      "https://harvest3.herokuapp.com/users/login",
      userData
    );
    dispatch({ type: AUTH_SIGNIN_SUCCESS, payload: response.data });

    //console.log(response.data);
    return response.data;
  } catch (err) {
    dispatch({ type: AUTH_SIGNIN_ERROR });
  }
};

export const logoutAPI = () => ({ type: AUTH_SIGNOUT });

export const signupAPI = (userData) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNUP_LOADING });
  try {
    let response = await axios.post(
      "https://harvest3.herokuapp.com/users/signup",
      userData
    );
    dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: response.data });
    return response.data;
  } catch (err) {
    dispatch({ type: AUTH_SIGNUP_ERROR });
  }
};
