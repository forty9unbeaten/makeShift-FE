import React from "react";
import { Footer, Menu } from "./components";
import {ExampleCard} from './components/ExampleCard.js'
import { Switch, Route } from "./components";
import pages from "./pages";

class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;





