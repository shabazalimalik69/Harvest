import { ADD_PROJECTS, ALL_DELETE_PROJECTS, DELETE_PROJECTS, EDIT_PROJECTS, GET_PROJECTS_ERROR, GET_PROJECTS_LOADING, GET_PROJECTS_SUCCESS } from "./project.type";
import axios from "axios";

export const getProject = () => async (dispatch) => {

    dispatch({type:GET_PROJECTS_LOADING})
    try {
        let res = await axios.get("http://localhost:8000/projects/projects")
        console.log("j:" , res.data.data);
        dispatch({type:GET_PROJECTS_SUCCESS,payload:res.data.data})
        return res.data.data;

        
    } catch (error) {

        dispatch({type:GET_PROJECTS_ERROR})
        
    }
    
}


export const postData = (creds) => async (dispatch) => {
    console.log(creds);
    try {
      const response = await axios.post(
        "http://localhost:8000/projects/projects",
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
        "http://localhost:8000/expenses/expenses/" + id,
        creds
      );
      console.log(response);
      dispatch({ type: EDIT_PROJECTS, payload: response.data });
      dispatch(getProject(null, page));
    } catch (e) {
      console.log(e.message);
    }
  };
  
  export const deleteData = (id, page) => async (dispatch) => {
    try {
      await axios.delete("http://localhost:8000/expenses/expenses/" + id);
      // console.log(response);
      dispatch({ type: DELETE_PROJECTS });
      dispatch(getProject(null, page));
    } catch (e) {
      console.log(e.message);
    }
  };
  export const allDeleteData = (page) => async (dispatch) => {
    try {
      await axios.delete("http://localhost:8000/expenses/expenses/");
      // console.log(response);
      dispatch({ type: ALL_DELETE_PROJECTS });
      dispatch(getProject(null, page));
    } catch (e) {
      console.log(e.message);
    };
}