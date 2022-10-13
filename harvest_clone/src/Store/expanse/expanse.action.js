import {
  ADD_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ALL_DELETE_PROJECT,
} from "./expanse.type";
import axios from "axios";

export const getData = (token, page) => async (dispatch) => {
  //   console.log(page);
  try {
    const response = await axios.get(
      `https://harvest3.herokuapp.com/expenses/expenses?page=${page}`,
      { headers: { token: token } }
    );
    // console.log(response.data.data);
    dispatch({ type: GET_PROJECT, payload: response.data.data });
    return response.data;
  } catch (r) {
    console.log(r.message);
  }
};

export const postData = (creds) => async (dispatch) => {
  console.log(creds);
  try {
    const response = await axios.post(
      "https://harvest3.herokuapp.com/expenses/expenses",
      creds
    );
    // console.log(response);
    dispatch({ type: ADD_PROJECT, payload: response.data });
  } catch (e) {
    console.log(e.message);
  }
};
export const patchData = (id, page, creds) => async (dispatch) => {
  console.log(creds);
  try {
    const response = await axios.patch(
      "https://harvest3.herokuapp.com/expenses/expenses/" + id,
      creds
    );
    console.log("response", response);
    dispatch({ type: EDIT_PROJECT, payload: response.data });
    dispatch(getData(null, page));
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteData = (id, page) => async (dispatch) => {
  try {
    await axios.delete(
      "https://harvest3.herokuapp.com/expenses/expenses/" + id
    );
    // console.log(response);
    dispatch({ type: DELETE_PROJECT });
    dispatch(getData(null, page));
  } catch (e) {
    console.log(e.message);
  }
};
export const allDeleteData = (page) => async (dispatch) => {
  try {
    await axios.delete("https://harvest3.herokuapp.com/expenses/expenses/");
    // console.log(response);
    dispatch({ type: ALL_DELETE_PROJECT });
    dispatch(getData(null, page));
  } catch (e) {
    console.log(e.message);
  }
};
