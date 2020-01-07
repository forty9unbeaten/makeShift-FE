import React from 'react';
import {CardExampleCard} from './react/components/card.js'
export { Switch, Route, Link } from "react-router-dom";
import pages from ".react/pages";

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
