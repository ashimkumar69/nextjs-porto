// import
import { FOOTER } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial   reducer
const initialFooter = {
  footer: null,
};

//  reducer
export const footerReducer = (state = initialFooter, action) => {
  switch (action.type) {
    case FOOTER:
      return updateState(state, {
        footer: action.payload,
      });
    default:
      return state;
  }
};
