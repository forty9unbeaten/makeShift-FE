import { combineReducers } from "redux";
import * as products from "./products";

export const masterReducer = combineReducers({
  allProducts: products.getAllProducts,
  singleProduct: products.getSingleProduct,
  newProduct: products.postProduct,
  filters: products.filterCategories
});
