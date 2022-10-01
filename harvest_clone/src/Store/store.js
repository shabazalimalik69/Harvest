import {
  combineReducers,
  legacy_createStore,
  compose,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import expanseReducer from "./expanse/expanse.reducer";
import { projectReducer } from "./project2/project.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  expanse: expanseReducer,
  projects:projectReducer
});


const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
