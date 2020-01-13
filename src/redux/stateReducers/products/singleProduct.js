import { GET_PRODUCT } from "../../actionTypes";

const initialState = {
  product: null,
  loading: false,
  error: false
};

export const getSingleProduct = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT.START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case GET_PRODUCT.SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload
      };
    case GET_PRODUCT.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
