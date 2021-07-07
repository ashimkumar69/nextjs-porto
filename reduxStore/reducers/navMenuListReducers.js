// import
import { NAV_MENU_LIST } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial   reducer
const initialNavMenuList = {
  navMenuList: [],
};

//  reducer
export const navMenuListReducer = (state = initialNavMenuList, action) => {
  switch (action.type) {
    case NAV_MENU_LIST:
      return updateState(state, {
        navMenuList: action.payload,
      });
    default:
      return state;
  }
};
