// import
import { SERVICES } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial   reducer
const initialServices = {
  services: null,
};

//  reducer
export const servicesReducer = (state = initialServices, action) => {
  switch (action.type) {
    case SERVICES:
      return updateState(state, {
        services: action.payload,
      });
    default:
      return state;
  }
};
