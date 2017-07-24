import React, { Component } from 'react';
import Header from "./elements/Header";
import AccountListContainer from "../containers/AccountListContainer";
import AccountDetailsContainer from "../containers/AccountDetailsContainer";
import TransactionHistoryContainer from "../containers/TransactionHistoryContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"Bank App"} />
        <div className="container">
          <h1>Bank App</h1>
          <div className="row">
          <AccountListContainer />
          <AccountDetailsContainer />
          </div>
          <div className="row">
            <TransactionHistoryContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
