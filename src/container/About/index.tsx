import React, { PureComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import aboutEpics from './epics';
import { injectEpics } from '../../createStore';
import {
  someAction,
} from './action';

interface Props {
  asyncRequest: (name: string) => void;
}
class About extends PureComponent<Props> {
  componentDidMount() {
    this.props.asyncRequest('sakuraash');
  }

  render(): ReactNode {
    return <div>this is about page</div>;
  }
}

injectEpics(aboutEpics);

const mapStateToProps = (state: any) => {
  return {
    myInfo: state.about.myInfo,
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  asyncRequest: (name: string) => dispatch(someAction(name))
});

function mergePropss(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

const withReducer = injectReducer({ key: 'about', reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps, mergePropss);

export default compose(withReducer, withConnect)(About);
