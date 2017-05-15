import React, { Component } from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import GroceryListContainer from "../containers/GroceryListContainer";
import AddItemContainer from "../containers/AddItemContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid heading="Groceries App" lead="Awesome" />
        <GroceryListContainer />
        <br />
        <AddItemContainer />
      </div>
    );
  }
}

export default App;
