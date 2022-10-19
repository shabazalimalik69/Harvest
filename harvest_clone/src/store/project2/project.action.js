import {
  ADD_PROJECTS,
  ALL_DELETE_PROJECTS,
  DELETE_PROJECTS,
  EDIT_PROJECTS,
  GET_PROJECTS_ERROR,
  GET_PROJECTS_LOADING,
  GET_PROJECTS_SUCCESS,
} from "./project.type";
import axios from "axios";

export const getProject = (page) => async (dispatch) => {
  dispatch({ type: GET_PROJECTS_LOADING });
  try {
    let res = await axios.get(
      `https://harvest3.herokuapp.com/projects/projects?page=${page}`
    );
    // console.log("j:", res.data);
    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: res.data.data,
      totalPages: res.data.totalPages,
    });
    return res.data.data;
  } catch (error) {
    dispatch({ type: GET_PROJECTS_ERROR });
  }
};
// export const getClient = (client, page) => async (dispatch) => {
//   dispatch({ type: GET_PROJECTS_LOADING });
//   try {
//     let res = await axios.get(
//       `https://harvest3.herokuapp.com/projects/projects?client_name=${client}page=${page}`
//     );
//     // console.log("j:", res.data);
//     dispatch({
//       type: GET_PROJECTS_SUCCESS,
//       payload: res.data.data,
//       totalPages: res.data.totalPages,
//     });
//     return res.data.data;
//   } catch (error) {
//     dispatch({ type: GET_PROJECTS_ERROR });
//   }
// };

export const postData = (creds) => async (dispatch) => {
  console.log(creds);
  try {
    const response = await axios.post(
      "https://harvest3.herokuapp.com/projects/projects",
      creds
    );
    // console.log(response);
    dispatch({ type: ADD_PROJECTS, payload: response.data });
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
    // console.log(response);
    dispatch({ type: EDIT_PROJECTS, payload: response.data });
    dispatch(getProject(null, page));
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
    dispatch({ type: DELETE_PROJECTS });
    dispatch(getProject(null, page));
  } catch (e) {
    console.log(e.message);
  }
};
export const allDeleteData = (page) => async (dispatch) => {
  try {
    await axios.delete("https://harvest3.herokuapp.com/expenses/expenses/");
    // console.log(response);
    dispatch({ type: ALL_DELETE_PROJECTS });
    dispatch(getProject(null, page));
  } catch (e) {
    console.log(e.message);
  }
};
