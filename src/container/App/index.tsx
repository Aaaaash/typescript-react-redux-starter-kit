import React, { PureComponent, ReactNode } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Main from '../Main';
import About from '../About';

class App extends PureComponent {
  render(): ReactNode {
    return (<div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
      </Switch>
    </div>);
  }
}

export default withRouter(App);
