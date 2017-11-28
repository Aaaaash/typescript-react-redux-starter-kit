import React, { PureComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

class About extends PureComponent {
  render(): ReactNode {
    return <div>this is about page</div>;
  }
}

const mapStateToProps = (state: any) => {
  return {
    myInfo: state.about.myInfo,
  }
};

const mapDispatchToProps = (dispatch: any) => ({
});

function mergePropss(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

const withReducer = injectReducer({ key: 'about', reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps, mergePropss);

export default compose(withReducer, withConnect)(About);
