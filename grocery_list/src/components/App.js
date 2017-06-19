import React, { Component } from 'react';
import GroceryListContainer from '../containers/GroceryListContainer';
import AddItemContainer from '../containers/AddItemContainer'
import FilterContainer from '../containers/FilterContainer'

class App extends Component {
  render() {
    return (
      <div className="App container">
      <h1 className="mb-5">Grocery List</h1>
      <div className="mb-1">
      <FilterContainer />
      </div>
        <GroceryListContainer />
        <AddItemContainer />
      </div>
    );
  }
}

export default App;
