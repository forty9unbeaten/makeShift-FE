import { EDIT_PRODUCT } from "../../actionTypes"

const initialState = {
    result: null,
    loading: false,
    error: null
  };
  
  export const editProduct = (state = initialState, action) => {
    switch (action.type) {
      case EDIT_PRODUCT.START:
        return {
          ...state,
          loading: true,
          error: null
        };
      case EDIT_PRODUCT.SUCCESS:
        return {
          ...state,
          result: action.payload,
          loading: false
        };
      case EDIT_PRODUCT.FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };