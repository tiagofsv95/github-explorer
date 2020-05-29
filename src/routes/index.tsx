import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Page404 from '../pages/Page404';

interface Props {
  toggleTheme(): void;
}

const Routes: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => <Dashboard {...props} toggleTheme={toggleTheme} />}
        // component={Dashboard}
      />

      <Route
        path="/repository/:repository+"
        render={(props) => <Repository {...props} toggleTheme={toggleTheme} />}
        // component={Repository}
      />

      <Route
        path="*"
        exact
        render={(props) => <Page404 {...props} toggleTheme={toggleTheme} />}
      />
    </Switch>
  );
};

export default Routes;
