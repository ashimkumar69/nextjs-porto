import { PROJECTS } from "../types/index";

// theme
export const getProjectsAction = (value) => async (dispatch) => {
  dispatch({
    type: PROJECTS,
    payload: value,
  });
};
