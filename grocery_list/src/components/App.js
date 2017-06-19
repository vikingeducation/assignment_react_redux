import React, { Component } from 'react';
import GroceryListContainer from '../containers/GroceryListContainer';
import AddItemContainer from '../containers/AddItemContainer'
import FilterContainer from '../containers/FilterContainer'
import SortContainer from '../containers/SortContainer'

class App extends Component {
  render() {
    return (
      <div className="App container">
      <h1 className="mb-5">Grocery List</h1>
      <div className="row">
      <div className="col-md-8">
       <FilterContainer />
      </div>
      <div className="col-md-4">
      <SortContainer />
      </div>

      </div>
        <GroceryListContainer />
        <AddItemContainer />
      </div>
    );
  }
}

export default App;
