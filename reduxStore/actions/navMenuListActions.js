import { NAV_MENU_LIST } from "../types/index";

// theme
export const getNavMenuListAction = (value) => async (dispatch) => {
  dispatch({
    type: NAV_MENU_LIST,
    payload: value,
  });
};
