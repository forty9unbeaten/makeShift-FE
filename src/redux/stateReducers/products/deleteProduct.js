import {DELETE_PRODUCT} from "../../actionTypes"

const initialState = {
    loading: false,
    error: null
  };
  
  export const deleteProduct = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_PRODUCT.START:
        return {
          loading: true,
          error: null
        };
      case DELETE_PRODUCT.SUCCESS:
        return {
          ...state,
          loading: false
        };
      case DELETE_PRODUCT.FAIL:
        return {
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };