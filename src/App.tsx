import React from "react";
import { ReactNode } from "react";
import { Button } from '@blueprintjs/core';
import '@blueprintjs/core/dist/blueprint.css';

class App extends React.PureComponent {
  state = {
    open: false,
  }
  render(): ReactNode {
    return (
      <div>
        <nav className="pt-navbar .modifier pt-dark">
            <div className="pt-navbar-group pt-align-left">
                <div className="pt-navbar-heading">HelloWorld</div>
                <input className="pt-input" placeholder="Search files..." type="text" />
            </div>
            <div className="pt-navbar-group pt-align-right">
                <Button className="pt-button pt-minimal pt-icon-home">Home</Button>
                <Button className="pt-button pt-minimal pt-icon-document">Files</Button>
                <span className="pt-navbar-divider"></span>
                <Button className="pt-button pt-minimal pt-icon-user"></Button>
                <Button className="pt-button pt-minimal pt-icon-notifications"></Button>
                <Button className="pt-button pt-minimal pt-icon-cog"></Button>
            </div>
        </nav>
      </div>
    );
  }
}

export default App;
