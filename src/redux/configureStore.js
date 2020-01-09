import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./stateReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
      )
    )
  );

  // store.subscribe(() => {
  // });

  return store;
}
