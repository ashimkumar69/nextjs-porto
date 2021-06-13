import { THEME_LIGHT, THEME_DARK } from "../types/index";

// theme
export const themeLightAction = () => async (dispatch) => {
  dispatch({
    type: THEME_LIGHT,
  });

  await localStorage.setItem("themeLight", JSON.stringify(true));
};

export const themeDarkAction = () => async (dispatch) => {
  dispatch({
    type: THEME_DARK,
  });

  await localStorage.setItem("themeLight", JSON.stringify(false));
};
