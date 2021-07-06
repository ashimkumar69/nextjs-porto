// import
import { HERO_BANNER } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial  theme reducer
const initialHeroBanner = {
  heroBanner: [],
};

// theme reducer
export const heroBannerReducer = (state = initialHeroBanner, action) => {
  switch (action.type) {
    case HERO_BANNER:
      return updateState(state, {
        heroBanner: action.payload,
      });
    default:
      return state;
  }
};
