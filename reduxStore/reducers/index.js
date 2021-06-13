import { combineReducers } from "redux";

//all import from Reducer
import { themeReducer } from "./themeReducers";

const reducers = {
  theme: themeReducer,
};

export default combineReducers(reducers);
