import { combineReducers } from "redux";

//all import from Reducer
import { themeReducer } from "./themeReducers";
import { navMenuListReducer } from "./navMenuListReducers";
import { heroBannerReducer } from "./heroBannerReducers";
import { aboutReducer } from "./aboutReducers";
import { servicesReducer } from "./servicesReducers";
import { projectsReducer } from "./projectsReducers";
import { testimonialsReducer } from "./testimonialsReducers";

// combine all reducer
const reducers = {
  theme: themeReducer,
  navMenuList: navMenuListReducer,
  heroBanner: heroBannerReducer,
  about: aboutReducer,
  services: servicesReducer,
  projects: projectsReducer,
  testimonials: testimonialsReducer,
};

export default combineReducers(reducers);
