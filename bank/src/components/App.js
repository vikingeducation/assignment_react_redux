import React, { Component } from 'react';
import SetActiveAccountContainer from '../containers/SetActiveAccountContainer'
import OverviewContainer from '../containers/OverviewContainer'
import CreateTransactionContainer from '../containers/CreateTransactionContainer'
import TransferContainer from '../containers/TransferContainer'
import TransactionHistoryContainer from '../containers/TransactionHistoryContainer'

class App extends Component {
  render() {
    return (
      <div className="App container">
         <h1>Bank</h1>
        <SetActiveAccountContainer />
        <hr />
        <OverviewContainer />
        <hr />
        <CreateTransactionContainer />
        <hr />
        <TransferContainer />
        <hr />
        <TransactionHistoryContainer />
      </div>
    );
  }
}

export default App;
