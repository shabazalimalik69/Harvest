import {
  ADD_PROJECT,
  GET_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  ALL_DELETE_PROJECT,
} from "./expanse.type";

const initialState = {
  data: [],
  page: 1,
};
const expanseReducer = (state = initialState, { type, payload }) => {
  //   console.log(payload);
  switch (type) {
    case GET_PROJECT: {
      return {
        ...state,
        data: payload,
      };
    }
    case ADD_PROJECT: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case EDIT_PROJECT: {
      return {
        ...state,
        data: [...state.data, payload],
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
