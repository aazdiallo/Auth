import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from './Authenticate';

const Routes =({component: RouteComponent, ...rest}) => {
  const {currentUser} = useContext(AuthContext);

  return (
    <Route
      {...rest}
        render={routeProps =>
          !!currentUser ? (
            <RouteComponent {...routeProps} />
          ): (
            <Redirect to={'/SignIn'} />
          )}
    />
  );
};

export default Routes;
