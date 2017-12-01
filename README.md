## Features

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
/*----------------actions.ts------------------*/
export function someAction(name: string) {
  return {
    type: 'GET_SOME_DATA',
    name,
  }
}

/*----------------reducer.ts------------------*/
const initialState = {
  myInfo: {}
}
export default function aboutReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'GET_SOME_DATA':
      return { ...state, myInfo: action.data };
    default:
      return state;
  }
}

/*----------------epics.ts------------------*/
// must be imported
import 'rxjs';

const pingEpic: Epic<Action, LifeStore<object>> = (action$: ActionsObservable<Action>) =>
  action$.filter((action: Action) => action.type === 'PING')
    .delay(1000)
    .mapTo({ type: 'PONG' });

const fetchUserEpic: Epic<Action, LifeStore<object>> = (action$: ActionsObservable<Action>) =>
  action$.ofType('GET_SOME_DATA')
    .mergeMap((action: Action) =>
      ajax.getJSON(`https://api.github.com/users/${action.name}`)
        .map(response => getSuccess(response))
    );

export default [
  pingEpic,
  fetchUserEpic
];

/*----------------index.tsx------------------*/

// Type declaration
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
