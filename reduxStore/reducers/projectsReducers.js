// import
import { PROJECTS } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial   reducer
const initialProjects = {
  projects: null,
};

//  reducer
export const projectsReducer = (state = initialProjects, action) => {
  switch (action.type) {
    case PROJECTS:
      return updateState(state, {
        projects: action.payload,
      });
    default:
      return state;
  }
};
