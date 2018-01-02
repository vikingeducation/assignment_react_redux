import { connect } from "react-redux";

import React, { PropTypes } from "react";

import { viewAccount } from "./actions";

import BankList from "./components/BankList";

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAccountClick: id => {
      dispatch(viewAccount(id));
    }
  };
};

const BankContainer = connect(mapStateToProps, mapDispatchToProps)(BankList);

export default BankContainer;
