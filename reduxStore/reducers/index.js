import { combineReducers } from "redux";

//all import from Reducer
import { themeReducer } from "./themeReducers";
import { navMenuListReducer } from "./navMenuListReducers";

// combine all reducer
const reducers = {
  theme: themeReducer,
  navMenuList: navMenuListReducer,
};

export default combineReducers(reducers);
