import React from "react";
import { Footer, Menu } from "./components";
import { Switch, Route } from "react-router";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        {Object.entries(pages).map(([routeName, routeObj]) => (
          <Route
            key={routeName}
            exact
            path={routeObj.path}
            component={routeObj.component}
          />
        ))}
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
