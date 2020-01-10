import { GET_ALL_PRODUCTS, GET_PRODUCT } from "../actionTypes";
import { domain, handleJsonResponse, handle401Error } from "./constants";

URL = domain + "/products";

export const getSingleProduct = productId => {
  return dispatch => {
    dispatch({
      type: GET_PRODUCT.START
    });

    return fetch(URL + `/${productId}`)
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: GET_PRODUCT.SUCCESS,
          payload: data.product
        })
      )
      .catch(error =>
        dispatch({
          type: GET_PRODUCT.FAIL,
          payload: error
        })
      );
  };
};

export const getAllProducts = () => {
  return dispatch => {
    dispatch({
      type: GET_ALL_PRODUCTS.START
    });

    return fetch(URL)
      .then(response => handleJsonResponse(response))
      .then(data =>
        dispatch({
          type: GET_ALL_PRODUCTS.SUCCESS,
          payload: data.products
        })
      )
      .catch(error =>
        dispatch({
          type: GET_ALL_PRODUCTS.FAIL,
          payload: error
        })
      );
  };
};
