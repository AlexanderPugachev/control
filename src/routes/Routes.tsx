import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { Accounts, Transactions } from '../pages';
import { MainLayout } from '../layouts';

export const Routes: React.FC = () => {

  return (
    <Router>
      <Switch>
        {routes.map(({ comp: Comp, key, ...rest }) =>
          <Route
            key={key}
            render={() =>
              <MainLayout>
                <Comp />
              </MainLayout>
            }
            {...rest}
          />
        )}
        <Redirect from="*" to="/transactions"/>
      </Switch>
    </Router>
  );
};

interface RouteProps {
  key: string,
  comp: React.FC,
  path: string,
  type?: string
}

export const routes: RouteProps[] = [
  { key: 'accounts', comp: Accounts, path: '/accounts', type: 'header' },
  // { key: 'auth', comp: Auth, path: '/auth' },
  { key: 'transactions', comp: Transactions, path: '/transactions', type: 'header' }
];