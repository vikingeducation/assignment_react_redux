import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BankContainer from "./bankContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WELCOME EMPLOYEE. THIS IS HAL 3000</h1>
        </header>
        <BankContainer />
      </div>
    );
  }
}

export default App;
