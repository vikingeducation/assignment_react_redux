import React, { Component } from 'react';
import JumbotronFluid from './elements/JumbotronFluid'
import GroceryListContainer from '../containers/GroceryListContainer'
import AddNewItemContainer from '../containers/AddNewItemContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid
          heading='Grocery List'
          lead='List your shopping items in your spare time, take that stress away; reduce shopping time and excess of unnessessary purchases with this one App.'

        />

        <GroceryListContainer />
        <br />
        <AddNewItemContainer />

      </div>
    );
  }
}

export default App;
