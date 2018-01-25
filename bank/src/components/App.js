import React, { Component } from 'react'
import JumbotronFluid from './elements/JumbotronFluid'
import AccountsListContainer from '../containers/AccountsListContainer'


// See all the accounts at my bank.
// Select an account to view.
// Deposit money into an account.
// Withdraw money from an account.
// Transfer money between accounts.
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
      </div>
    );
  }
}

export default App;
