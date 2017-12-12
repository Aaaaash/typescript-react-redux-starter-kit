## Features

[![](https://badge.juejin.im/entry/5a28fce4f265da430b7b21d2/likes.svg?style=flat-square)](https://juejin.im/entry/5a28fce4f265da430b7b21d2/detail)

### [Typescript](https://github.com/Microsoft/TypeScript)

  强类型的JavaScript，提高编码、debug效率
### [React](https://github.com/facebook/react)
  facebook开源库，基于JSX语法创建组件
### [Redux](https://github.com/reactjs/redux)
  可预测状态容器，最流行的react状态管理方案
### [Docker](https://www.docker.com/)
  虚拟化容器，一键打包部署发布

## Quick start
1. `npm install -g typescript`

2. `git clone git@github.com:SakuraAsh/about-life.git`
3. `cd about-life`
4. `yarn install && yarn start`

### build
1. `yarn run build`

## Example

### container
```javascript

/**
 * action.ts
 * */

export function someAction(name: string) {
  return {
    type: 'GET_SOME_DATA',
    name,
  }
}

/**
 * reducer.ts
 * */
const initialState = fromJS({
  myInfo: {}
});

const reducer: Reducer<State> =
  (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      return state.set('myInfo', fromJS(action.data));
    default:
      return state;
  }
}

/**
 * epic.ts
 * */

// must be imported
import 'rxjs';


const pingEpic: Epic<Action, LifeStore> = (action$: ActionsObservable<Action>) =>
  action$.filter((action: Action) => action.type === 'PING')
    .delay(1000)
    .mapTo({ type: 'PONG' });

const fetchUserEpic: Epic<Action, LifeStore> = (action$: ActionsObservable<Action>) =>
  action$.ofType('GET_SOME_DATA')
    .mergeMap((action: Action) =>
      ajax.getJSON(`https://api.github.com/users/${action.name}`)
        .map(response => getSuccess(response))
    );

export default combineEpics(
  pingEpic,
  fetchUserEpic
);

/*
 * index.tsx
 * */

interface Props {
  asyncRequest: (name: string) => void;
}

interface State {
  requesting: boolean;
}

class Auth extends PureComponent<Props, State>{
  render(): ReactNode {
    return (<div>
      {/*your code*/}
    </div>);
  }
}

// inject redux-ovservable epics
injectEpics('about', aboutEpics);

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

```

## License

MIT
