import {
  ADD_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ALL_DELETE_PROJECT,
} from "./expanse.type";

const initialState = {
  expanseData: [],
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
        expanseData: payload,
        totalPages: totalPages,
      };
    }
    case ADD_PROJECT: {
      return {
        ...state,
        expanseData: [...state.expanseData, payload],
      };
    }
    case EDIT_PROJECT: {
      return {
        ...state,
        expanseData: [...state.expanseData, payload],
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
