// import
import { THEME_LIGHT, THEME_DARK } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial  theme reducer
const initialTheme = {
  themeLight: true,
};

// theme reducer
export const themeReducer = (state = initialTheme, { type }) => {
  switch (type) {
    case THEME_LIGHT:
      return updateState(state, {
        themeLight: true,
      });
    case THEME_DARK:
      return updateState(state, {
        themeLight: false,
      });
    default:
      return state;
  }
};
