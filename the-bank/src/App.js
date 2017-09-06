import React, { Component } from "react";
import "./App.css";
// import Pane from "./components/Pane";
import AccountViewerContainer from "./containers/AccountViewerContainer";
import Button from "./components/elements/Button";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    let { accounts } = this.props;
    console.log(accounts, " accounts ");
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Bank</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <AccountViewerContainer />
            {/* <Pane accounts={accounts} />
            <Pane accounts={accounts} /> */}
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
//Thoughts:
//#1 Rename everything
/*
you need to be able to view / select two accounts
UI
indexOfAccounts, with short descriptions and selection buttons
selecting one account populates a viewer below that
there's two accounts here (in the viewer )

hmmm maybe it'd be better as a..to paintBrush!
*/

/*
As a bank employee, I want to...

See all the accounts at my bank.
Select an account to view.
Deposit money into an account.
Withdraw money from an account.
Transfer money between accounts.
Filter transactions by date (using a start and end date).
*/
