import React, { Component } from "react";
import GroceryListContainer from "../containers/GroceryListContainer";
import AddGroceryItemContainer from "../containers/AddGroceryItemContainer";
import PurchasedFilterContainer from "../containers/PurchasedFilterContainer";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <h2>Welcome to the Grocery Store</h2>
        </div>
        <PurchasedFilterContainer />
        <GroceryListContainer />
        <AddGroceryItemContainer />
      </div>
    );
  }
}

export default App;
