import { createSelector } from 'reselect';

import { ReduxState } from '../../types';

const selectAbout = (state: ReduxState) => state.get('about');

const selectMyGithubInfo = () => createSelector(
  selectAbout,
  (state: ReduxState) => state.get('myInfo').toJS()
);

export {
  selectMyGithubInfo,
};
