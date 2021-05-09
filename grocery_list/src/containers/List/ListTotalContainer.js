/****************************
Contains ListTotal component. Should be width of whole list. passes method for sum of all available subtotals
props is just the total kept in state
*****************************/
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListTotal from "../../components/List/ListTotal";

const mapStateToProps = (state, ownProps) => {
	//gets list passed through filters
	let newList = ownProps.filterList(
		state.groceryList,
		state.linkFilter,
		state.categoryFilter
	);

	let groceryListTotal = newList.reduce((a, item) => {
		return (a += parseInt(item.amount));
	}, 0);

	return {
		total: groceryListTotal
	};
};
const mapDispatchToProps = (state, ownProps) => {
	return {};
};
const ListTotalContainer = connect(mapStateToProps, mapDispatchToProps)(
	ListTotal
);

ListTotalContainer.propTypes = {};
export default ListTotalContainer;
