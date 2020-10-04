import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { Accounts, Auth, Transactions } from '../pages';
import { MainLayout } from '../layouts';
import * as authActions from '../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((s: RootState) => s.auth);

  // check on app start
  useEffect(() => {
    console.log('user', user);
    if (!user) dispatch(authActions.currentUser());
  }, [dispatch, user]);

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
  { key: 'auth', comp: Auth, path: '/auth' },
  { key: 'transactions', comp: Transactions, path: '/transactions', type: 'header' }
];