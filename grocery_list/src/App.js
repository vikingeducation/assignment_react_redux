import React, { Component } from 'react';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
