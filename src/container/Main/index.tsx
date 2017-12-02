import React, { PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import mainEpics from './epics';
import { injectEpics } from '../../createStore';
import { LifeStore } from '../../types';

class Main extends PureComponent {
  render(): ReactNode {
    return (
      <div>
        <p>this is main page!</p>
        <Link to="/about">about</Link>
      </div>
    );
  }
}

injectEpics('main', mainEpics);

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<object>) => ({
});

function mergePropss(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

const withReducer = injectReducer({ key: 'main', reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps, mergePropss);

export default compose(withReducer, withConnect)(Main);
