/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, RouteProps as RoutePropsDom, Redirect } from 'react-router-dom';

import { useAuth } from '../context/auth';

interface RouteProps extends RoutePropsDom {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Routes: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { signed } = useAuth();

  return (
    <Route
      render={({ location }) => {
        return isPrivate === signed ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
      {...rest}
    />
  );
};

export default Routes;
