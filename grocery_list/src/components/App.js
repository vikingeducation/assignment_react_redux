import React, { Component } from 'react';
import GroceryListContainer from '../containers/GroceryListContainer';
import AddItemContainer from '../containers/AddItemContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">React/Redux Grocery List</h1>
        </header>
        <div className="container">
          <div className="row justify-content-center">
            <GroceryListContainer />
            <AddItemContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
