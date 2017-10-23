/****************************
Contains ListTotal component. Should be width of whole list. passes method for sum of all available subtotals
props is just the total kept in state
*****************************/
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListTotal from "../../components/List/ListTotal";

const mapPropsToState = (state, ownProps) => {
	let groceryListTotal = state.groceryList.reduce((a, item) => {
		return (a += parseInt(item.amount));
	}, 0);

	return {
		total: groceryListTotal
	};
};
const mapDispatchToProps = (state, ownProps) => {
	return {};
};
const ListTotalContainer = connect(mapPropsToState, mapDispatchToProps)(
	ListTotal
);

ListTotalContainer.propTypes = {};
export default ListTotalContainer;
