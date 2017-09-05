import React, { Component } from "react";
import groceryList from "../../components/groceryList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = state => {};

const GroceryListContainer = connect(mapStateToProps, null)(groceryList);

export default GroceryListContainer;
