import React, { Component } from "react";
import GroceryListContainer from "../containers/GroceryListContainer";
import AddGroceryItemContainer from "../containers/AddGroceryItemContainer";
import PurchasedFilterContainer from "../containers/PurchasedFilterContainer";
import CategoryFilterContainer from "../containers/CategoryFilterContainer";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <h2>Welcome to the Grocery Store</h2>
        </div>
        <PurchasedFilterContainer />
        <CategoryFilterContainer />
        <GroceryListContainer />
        <AddGroceryItemContainer />
      </div>
    );
  }
}

export default App;
