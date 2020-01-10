import React from "react";
import { Footer, Menu } from "./components";
import { Switch, Route } from "react-router-dom";
import pages from "./pages";

class App extends React.Component {
  render() {
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
}

export default App;
