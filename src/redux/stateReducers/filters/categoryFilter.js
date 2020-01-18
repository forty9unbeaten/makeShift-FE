import { CHANGE_CATEGORY, CLEAR_FILTER } from "../../actionTypes";

const initialState = {
  category: null
};

export const filterCategories = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        category: action.payload
      };
    case CLEAR_FILTER:
      return initialState;
    default:
      return {
        ...state
      };
  }
};
