import React from 'react';
import { Route } from 'react-router-dom';

const CustomPropsToRoute = ({ component: Component, initialData, ...rest }: any) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} initialData={initialData} />
    )}
  />
)

export default CustomPropsToRoute;
