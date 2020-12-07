import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Accounts, Actions } from '../pages';
import { MainLayout } from '../layouts';

interface RouteProps {
  key: string;
  comp: React.FC;
  path: string;
  type?: string;
}

export const routes: RouteProps[] = [
  { key: 'accounts', comp: Accounts, path: '/accounts', type: 'header' },
  {
    key: 'transactions',
    comp: Actions,
    path: '/transactions',
    type: 'header',
  },
];

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ comp: Comp, key, ...rest }) => (
          <Route
            key={key}
            render={() => (
              <MainLayout>
                <Comp />
              </MainLayout>
            )}
            {...rest}
          />
        ))}
        <Redirect from="*" to="/transactions" />
      </Switch>
    </Router>
  );
};
