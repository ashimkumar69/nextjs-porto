import { CONTACT } from "../types/index";

// theme
export const getContactAction = (value) => async (dispatch) => {
  dispatch({
    type: CONTACT,
    payload: value,
  });
};
