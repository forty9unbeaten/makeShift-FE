const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

export const GET_PRODUCT = createActionTypes("GET_PRODUCT");
export const GET_ALL_PRODUCTS = createActionTypes("GET_ALL_PRODUCTS");
export const POST_PRODUCT = createActionTypes("POST_PRODUCT");
export const DELETE_PRODUCT = createActionTypes("DELETE_PRODUCT");
export const EDIT_PRODUCT = createActionTypes("EDIT_PRODUCT");

export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
// comment
