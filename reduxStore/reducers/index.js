import { combineReducers } from "redux";

//all import from Reducer
import { themeReducer } from "./themeReducers";
import { navMenuListReducer } from "./navMenuListReducers";
import { heroBannerReducer } from "./heroBannerReducers";

// combine all reducer
const reducers = {
  theme: themeReducer,
  navMenuList: navMenuListReducer,
  heroBanner: heroBannerReducer,
};

export default combineReducers(reducers);
