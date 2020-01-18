import { combineReducers } from "redux";
import * as products from "./products";
import * as filters from "./filters";

export const masterReducer = combineReducers({
  allProducts: products.getAllProducts,
  singleProduct: products.getSingleProduct,
  newProduct: products.postProduct,
  productFilter: filters.filterCategories,
  productSort: filters.sortProducts
});

// comment
