// import
import { NEWS } from "../types/index";
import { updateState } from "../utilities/updateState";

// initial   reducer
const initialNews = {
  news: null,
};

//  reducer
export const newsReducer = (state = initialNews, action) => {
  switch (action.type) {
    case NEWS:
      return updateState(state, {
        news: action.payload,
      });
    default:
      return state;
  }
};
