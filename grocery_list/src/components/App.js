import React, { Component } from "react";
import Header from "./elements/Header";
import GroceryListContainer from "../containers/GroceryListContainer";
import AddProductContainer from "../containers/AddProductContainer";
import Filters from "./Filters";

class App extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <Header title={"Grocery List"} />
        <div className="container">
          <h1>Grocery List App</h1>
          <Filters categories={categories} />
          <GroceryListContainer />
          <AddProductContainer categories={categories}/>
        </div>
      </div>
    );
  }
}

export default App;
