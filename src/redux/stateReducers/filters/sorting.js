import { CHANGE_SORT, CLEAR_SORT } from "../../actionTypes";

const initialState = {
  sort: null
};

export const sortProducts = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT:
      return {
        sort: action.payload
      };
    case CLEAR_SORT:
      return initialState;
    default:
      return {
        ...state
      };
  }
};
