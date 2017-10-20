/****************************
Contains top row of list with labels with and without sorting feature
Sorting for : name, categories, price

Non-sorting: description, amount

Props are sorting logic for sorting buttons/icons.
*****************************/
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListHeader from "../../components/List/ListHeader";

class ListHeaderContainer extends Component {
	render() {
		return <ListHeader />;
	}
}
ListHeaderContainer.propTypes = {};
export default ListHeaderContainer;
