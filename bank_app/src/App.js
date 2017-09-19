import React, { Component } from 'react';
import './App.css';
import * as actions from "./actions"
import {bindActionCreators} from "redux";
import {connect} from "react-redux"

import AccountList from "./components/accountList";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bank Dashboard</h2>
        </div>
        <AccountList accounts={this.props.accounts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
