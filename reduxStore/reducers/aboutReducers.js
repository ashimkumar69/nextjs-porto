// import
import { ABOUT } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial   reducer
const initialHeroBanner = {
  about: null,
};

//  reducer
export const aboutReducer = (state = initialHeroBanner, action) => {
  switch (action.type) {
    case ABOUT:
      return updateState(state, {
        about: action.payload,
      });
    default:
      return state;
  }
};
