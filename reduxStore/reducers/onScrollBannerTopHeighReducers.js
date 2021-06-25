// import
import { SET_BANNER_TOP_HEIGHT } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial  reducer
const initialTheme = {
  height: 0,
};

export const onScrollBannerTopHeightReducer = (
  state = initialTheme,
  action
) => {
  switch (action.type) {
    case SET_BANNER_TOP_HEIGHT:
      return updateState(state, {
        height: action.height,
      });

    default:
      return state;
  }
};
