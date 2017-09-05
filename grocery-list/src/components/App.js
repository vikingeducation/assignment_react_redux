import React, { Component } from "react";
import ItemListContainer from "../containers/itemListContainer";
import AddItemContainer from "../containers/addItemContainer";
// import "../App.css";
//
// As a user, I want to...
//
// See my grocery list items (remember you can always initialize your reducer or add a preloaded state to the store to see if this works).
// Add a new item to my grocery list. The item should have a name/description and optional fields for amount and category.
// Indicate an item has been purchased.
// Set filters for purchased/not purchased/all, categories/all.
// Set sort by name/description.

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the fabulous store</h2>
        </div>
        <div className="container">
          {/* sort */}

          {/* filter */}

          {/* list */}
          <div className="row">
            <ItemListContainer />
          </div>

          {/* add item */}
          <div className="row">
            <AddItemContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
