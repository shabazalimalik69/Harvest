import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { projectReducer } from "./project2/project.reducer";

const rootReducer = combineReducers({projects:projectReducer});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))