// import
import { SET_BANNER_TOP_HEIGHT } from "../types/index";

// theme
export const onScrollBannerTopHeightAction = (height) => (dispatch) => {
  dispatch({
    type: SET_BANNER_TOP_HEIGHT,
    height,
  });
};
