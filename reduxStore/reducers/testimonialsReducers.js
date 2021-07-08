// import
import { TESTIMONIALS } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial   reducer
const initialTestimonials = {
  testimonials: null,
};

//  reducer
export const testimonialsReducer = (state = initialTestimonials, action) => {
  switch (action.type) {
    case TESTIMONIALS:
      return updateState(state, {
        testimonials: action.payload,
      });
    default:
      return state;
  }
};
