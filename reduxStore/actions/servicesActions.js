import { SERVICES } from "../types/index";

// theme
export const getServicesAction = (value) => async (dispatch) => {
  dispatch({
    type: SERVICES,
    payload: value,
  });
};
