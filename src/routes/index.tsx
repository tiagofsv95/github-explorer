import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

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
    </Switch>
  );
};

export default Routes;
