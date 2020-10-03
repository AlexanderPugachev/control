import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface Props {
  checkAuth: () => boolean,
  component: typeof React.Component
}

export const PrivateRoute: React.FC<Props> = ({
  component: Component,
  checkAuth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => checkAuth()
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
    }
  />
);