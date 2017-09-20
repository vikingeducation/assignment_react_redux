import React, { Component } from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import SelectAccountContainer from '../containers/SelectAccountContainer';
import AccountListContainer from "../containers/AccountListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid heading="Bank" lead="Awesome" />
        <SelectAccountContainer />
        <AccountListContainer />
      </div>
    );
  }
}

export default App;
