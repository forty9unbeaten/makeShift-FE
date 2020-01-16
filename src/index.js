import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { App } from "./react";
import { createStore, applyMiddleware } from "redux";
import { masterReducer } from "./redux/stateReducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  masterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// comment
