import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { routes } from './index';

const Routes: React.FC = () => {

  return (
    <Router>
      <Switch>
        {routes.map(({ component: Component, key, ...rest }) =>
          <Route
            {...rest}
            key={key}
            render={() =>
              <MainLayout>
                <Component/>
              </MainLayout>
            }
          />
        )}
        <Route>
          <Redirect to="/transactions"/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;