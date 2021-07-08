// import
import { CONTACT } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial   reducer
const initialContact = {
  contact: null,
};

//  reducer
export const contactReducer = (state = initialContact, action) => {
  switch (action.type) {
    case CONTACT:
      return updateState(state, {
        contact: action.payload,
      });
    default:
      return state;
  }
};
