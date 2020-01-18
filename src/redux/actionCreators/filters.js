import { CHANGE_CATEGORY, CLEAR_FILTER, CHANGE_SORT, CLEAR_SORT } from "../actionTypes";

export const filterProducts = categories => {
  return dispatch => {
    dispatch({
      type: CHANGE_CATEGORY,
      payload: categories
    });
  };
};

export const clearFilter = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_FILTER
    });
  };
};

export const sortProducts = sorting => {
  return dispatch => {
    dispatch({
      type: CHANGE_SORT,
      payload: sorting
    })
  }
};

export const clearSort = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_SORT
    })
  }
};
