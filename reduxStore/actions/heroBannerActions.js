import { HERO_BANNER } from "../types/index";

// theme
export const getHeroBannerAction = (value) => async (dispatch) => {
  dispatch({
    type: HERO_BANNER,
    payload: value,
  });
};
