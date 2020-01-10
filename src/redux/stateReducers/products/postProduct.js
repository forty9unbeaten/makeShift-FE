import { POST_PRODUCT } from "../../actionTypes";

const initialState = {
  result: null,
  loading: false,
  error: null
};

export const postProduct = (state = initialState, action) => {
  switch (action.payload) {
    case POST_PRODUCT.START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case POST_PRODUCT.SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload
      };
    case POST_PRODUCT.FAIL:
      return {
        result: null,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};