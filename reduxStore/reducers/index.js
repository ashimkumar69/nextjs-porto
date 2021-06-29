import { combineReducers } from "redux";

//all import from Reducer
import { themeReducer } from "./themeReducers";

// combine all reducer
const reducers = {
  theme: themeReducer,
};

export default combineReducers(reducers);
