import { CHANGE_CATEGORY } from "../../actionTypes";

const initialState = {
  categories: []
};

export const filterCategories = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
          categories: action.payload
      };
    default:
        return {
            ...state
        }
  }
};
