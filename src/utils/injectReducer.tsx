import React, { ComponentType } from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';
import { InjectedReducerParams } from '../types';

export default ({ key, reducer }: InjectedReducerParams) => (WrappedComponent: ComponentType<object>) => {
  class ReducerInjector extends React.PureComponent {
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };
    static displayName = `withReducer(${(WrappedComponent.displayName || WrappedComponent.name || 'Component')})`;

    componentWillMount() {
      const { injectReducer } = this.injectors;

      injectReducer(key, reducer);
    }

    injectors = getInjectors(this.context.store);

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
