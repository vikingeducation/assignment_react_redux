import React, { Component } from 'react';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import GroceryList from "./components/groceryList";

class App extends Component {
  componentDidMount() {
    const { addItem } = this.props.actions;
    addItem({
      name: 'milk',
      description: 'it is made of milk',
      amount: 1,
      category: 'dairy',
      purchased: false
    });

    addItem({
      name: 'bread',
      description: 'whole wheat bread with no crust somehow',
      amount: 4,
      category: 'bakery',
      purchased: false
    });

    addItem({
      name: 'cheese',
      description: 'it is also made of milk',
      amount: 17,
      category: 'dairy',
      purchased: false
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Your Shopping Cart!</h2>
        </div>
        <GroceryList groceries={this.props.groceries} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groceries: state.groceryApp.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
