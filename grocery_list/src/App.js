import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GroceryListContainer from "./containers/grocery-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GroceryListContainer />
      </div>
    );
  }
}

export default App;
