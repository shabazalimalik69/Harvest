import {
  AUTH_SIGNIN_ERROR,
  AUTH_SIGNIN_LOADING,
  AUTH_SIGNIN_SUCCESS,
  AUTH_SIGNOUT,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
} from "./auth.types";

let token = localStorage.getItem("token") || "";
let first_name = localStorage.getItem("first_name") || "";

const initState = {
  token: token,
  loading: false,
  error: false,
  first_name: first_name,
};

export const authReducer = (state = initState, { type, payload }) => {
  //console.log(state);
  switch (type) {
    case AUTH_SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGNUP_SUCCESS: {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("first_name", payload.first_name);

      return {
        ...state,
        loading: false,
        error: false,
        token: payload.token,
      };
    }

    case AUTH_SIGNIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SIGNIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGNIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("first_name", payload.first_name);
      return {
        ...state,
        loading: false,
        error: false,
        token: payload.token,
      };
    }
    case AUTH_SIGNOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("first_name");
      return {
        ...state,
        loading: false,
        error: false,
        token: "",
        first_name: "",
      };
    }
    default: {
      return state;
    }
  }
};
