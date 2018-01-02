import React, { Component } from "react";
import logo from "../logo.png";
// import "./App.css";
import GroceryListContainer from "../containers/GroceryListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Grocery List in the Console!</h1>
        </header>
        <GroceryListContainer />
      </div>
    );
  }
}

export default App;
