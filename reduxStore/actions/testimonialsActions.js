import { TESTIMONIALS } from "../types/index";

// theme
export const getTestimonialsAction = (value) => async (dispatch) => {
  dispatch({
    type: TESTIMONIALS,
    payload: value,
  });
};
