import React, { Component } from 'react';
import AccountsContainer from '../containers/AccountsContainer';
import SelectedAccountContainer from '../containers/SelectedAccountContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">React/Redux Bank</h1>
        </header>
        <div className="container">
          <div className="row justify-content-center">
            <SelectedAccountContainer />
            <AccountsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
