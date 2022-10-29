import {
  ADD_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ALL_DELETE_PROJECT,
} from "./expanse.type";

const initialState = {
<<<<<<< HEAD
  data1: [],
=======
  expanseData: [],
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
  page: 1,
  totalPages: 1,
};
const expanseReducer = (
  state = initialState,
  { type, payload, totalPages }
) => {
  // console.log(totalPages);
  switch (type) {
    case GET_PROJECT: {
      return {
        ...state,
<<<<<<< HEAD
        data1: payload,
=======
        expanseData: payload,
        totalPages: totalPages,
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
      };
    }
    case ADD_PROJECT: {
      return {
        ...state,
<<<<<<< HEAD
        data1: [...state.data1, payload],
=======
        expanseData: [...state.expanseData, payload],
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
      };
    }
    case EDIT_PROJECT: {
      return {
        ...state,
<<<<<<< HEAD
        data1: [...state.data1, payload],
=======
        expanseData: [...state.expanseData, payload],
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
      };
    }
    case DELETE_PROJECT: {
      return {
        ...state,
      };
    }
    case ALL_DELETE_PROJECT: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default expanseReducer;
