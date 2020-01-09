import { combineReducers } from "redux";
import * as products from "./products";

export default () => {
  combineReducers({
    products: combineReducers(products)
  });
};
