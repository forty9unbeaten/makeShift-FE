import React from "react";
import { Footer, Menu } from "./components";
import { Switch, Route } from "react-router-dom";
import pages from "./pages";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
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
          <div className="app__footer">
            <Footer />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
