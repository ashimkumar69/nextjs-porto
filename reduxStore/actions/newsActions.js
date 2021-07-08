import { NEWS } from "../types/index";

// theme
export const getNewsAction = (value) => async (dispatch) => {
  dispatch({
    type: NEWS,
    payload: value,
  });
};
