import { THEME_LIGHT, THEME_DARK } from "../types/index";

// theme
export const themeLightAction = () => (dispatch) =>
  dispatch({
    type: THEME_LIGHT,
  });
export const themeDarkAction = () => (dispatch) =>
  dispatch({
    type: THEME_DARK,
  });
