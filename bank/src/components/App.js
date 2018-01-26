import React, { Component } from 'react'
import JumbotronFluid from './elements/JumbotronFluid'
import AccountsListContainer from '../containers/AccountsListContainer'
import TransactionsContainer from '../containers/TransactionsContainer'

// Select an account to view.
// Filter transactions by date (using a start and end date).

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid
          heading='Banking System'
          lead='We deposit our paychecks, take out loans, and set up savings accounts, all at the bank. The banking system is a group/network of institutions that provide financial services for us. These institutions are responsible for operating a payment system, providing loans, taking deposits, and helping with investments.'
        />
        <AccountsListContainer />

        <TransactionsContainer />
      </div>
    );
  }
}

export default App;
