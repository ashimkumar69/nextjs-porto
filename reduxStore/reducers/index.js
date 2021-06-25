import { combineReducers } from "redux";

//all import from Reducer
import { themeReducer } from "./themeReducers";
import { onScrollBannerTopHeightReducer } from "./onScrollBannerTopHeighReducers";

const reducers = {
  theme: themeReducer,
  onScrollBannerTopHeight: onScrollBannerTopHeightReducer,
};

export default combineReducers(reducers);
