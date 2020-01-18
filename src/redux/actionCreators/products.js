import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  POST_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  CHANGE_CATEGORY
} from "../actionTypes";
import { domain, handleJsonResponse, jsonHeaders } from "./constants";

const URL = domain + "/products";

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

    return fetch(URL, {
      headers: jsonHeaders
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        dispatch({
          type: GET_ALL_PRODUCTS.SUCCESS,
          payload: data.products
        });
      })
      .catch(error => {
        dispatch({
          type: GET_ALL_PRODUCTS.FAIL,
          payload: error
        });
      });
  };
};

export const postProduct = product => {
  return dispatch => {
    dispatch({
      type: POST_PRODUCT.START
    });

    return fetch(URL, {
      method: "POST",
      headers: {
        ...jsonHeaders
      },
      body: JSON.stringify({ product })
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        dispatch({
          type: POST_PRODUCT.SUCCESS,
          payload: data.product
        });
      })
      .catch(error => {
        return dispatch({
          type: POST_PRODUCT.FAIL,
          payload: error
        });
      });
  };
};

export const deleteProduct = productId => {
  return dispatch => {
    dispatch({
      type: DELETE_PRODUCT.START
    });

    return fetch(URL + `/${productId}`, {
      method: "DELETE",
      headers: {
        ...jsonHeaders
      }
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        dispatch({
          type: DELETE_PRODUCT.SUCCESS
        });
      })
      .catch(error => {
        dispatch({
          type: DELETE_PRODUCT.FAIL,
          payload: error
        });
      });
  };
};

export const editProduct = (productId, modifications) => {
  return dispatch => {
    dispatch({
      type: EDIT_PRODUCT.START
    });

    return fetch(URL + `/${productId}`, {
      method: "PATCH",
      headers: {
        ...jsonHeaders
      },
      body: JSON.stringify({
        modifications
      })
    })
      .then(response => handleJsonResponse(response))
      .then(data => {
        dispatch({
          type: EDIT_PRODUCT.SUCCESS,
          payload: data.product
        });
      })
      .catch(error => {
        dispatch({
          type: EDIT_PRODUCT.FAIL,
          payload: error
        });
      });
  };
};
