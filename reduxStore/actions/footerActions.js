import { FOOTER } from "../types/index";

// theme
export const getFooterAction = (value) => async (dispatch) => {
  dispatch({
    type: FOOTER,
    payload: value,
  });
};
