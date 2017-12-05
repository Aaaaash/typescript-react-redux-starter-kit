import React, { PureComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, Dispatch } from 'redux';

import injectReducer from '../../utils/injectReducer';
import { ReduxState } from '../../types';
import reducer from './reducer';
import aboutEpics from './epics';
import { injectEpics } from '../../createStore';
import {
  someAction,
} from './action';
import {
  selectMyGithubInfo,
} from './selector';

interface Props {
  asyncRequest: (name: string) => void;
  myInfo: Object;
}

class About extends PureComponent<Props> {
  componentDidMount() {
    this.props.asyncRequest('sakuraash');
  }

  render(): ReactNode {
    const { myInfo } = this.props;
    console.log(myInfo);
    return <div>this is about page</div>;
  }
}

injectEpics('about', aboutEpics);

const mapStateToProps = (state: ReduxState) => createStructuredSelector({
  myInfo: selectMyGithubInfo(),
});

const mapDispatchToProps = (dispatch: Dispatch<object>) => ({
  asyncRequest: (name: string) => dispatch(someAction(name))
});

function mergePropss(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

const withReducer = injectReducer({ key: 'about', reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps, mergePropss);

export default compose(withReducer, withConnect)(About);
