import { ABOUT } from "../types/index";

// theme
export const getAboutAction = (value) => async (dispatch) => {
  dispatch({
    type: ABOUT,
    payload: value,
  });
};
