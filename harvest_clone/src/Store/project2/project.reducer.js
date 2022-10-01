import { ADD_PROJECTS, ALL_DELETE_PROJECTS, DELETE_PROJECTS, EDIT_PROJECTS, GET_PROJECTS_ERROR, GET_PROJECTS_LOADING, GET_PROJECTS_SUCCESS } from "./project.type";

let initialState = {
    loading : false,
    error : false,
    data : [],

};

export const projectReducer  =  (state=initialState,{type, payload}) => {
        
    
    console.log(payload)
    
    switch(type){
        case GET_PROJECTS_LOADING:{
            return {
                ...state,loading:true
            }
        }
        case GET_PROJECTS_ERROR:{
            return {
                ...state,loading:false,error:true
            }
        }
        case GET_PROJECTS_SUCCESS:{
            return {
                ...state,loading:false,error:false,
                data:payload
            }
        }

        case ADD_PROJECTS: {
            return {
              ...state,
              data: [...state.data, payload],
            };
          }
          case EDIT_PROJECTS: {
            return {
              ...state,
              data: [...state.data, payload],
            };
          }
          case DELETE_PROJECTS: {
            return {
              ...state,
            };
          }
          case ALL_DELETE_PROJECTS: {
            return {
              ...state,
            };
          }
        


        default : {
            return{
                ...state
            }
        }

    }

} 