/****************************
Contains the items themselves. as a ul and items as li of forms

Props:
items array
Onclick for purchase(toggle), remove, and edit

Forms should toggle editable when user clicks edit.
*****************************/
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItem from "../../components/List/ListItem";

//returns new list based on status filters set by filter links
const filterPurchased = (list, filters) => {
	switch (filters.filter) {
		case "All":
			return list;
		case "Purchased":
			return list.filter(item => item.status);
		case "NotPurchased":
			return list.filter(item => !item.status);
		default:
			return list;
	}
};

const filterCategory = (list, category) => {
	console.log("infilter category list:", list);
	console.log("infilter category category:", category);
	const newList = list.filter(item => {
		return item.category === category.toLowerCase();
	});
	if (category === "All") {
		console.log("ALL", list);
		return list;
	} else {
		return newList;
	}
};

const filterList = (list, filter, category) => {
	// console.log(
	// 	"in filter list",
	// 	filterCategory(filterPurchased(list, filter), category)
	// );
	return filterCategory(filterPurchased(list, filter), category);
};

const mapStateToProps = (state, ownProps) => {
	return {
		groceryList: filterList(
			state.groceryList,
			state.linkFilter,
			state.categoryFilter
		)
	};
};

const mapDispatchToProps = (state, ownProps) => {
	return {};
};
const ListItemsContainer = connect(mapStateToProps, mapDispatchToProps)(
	ListItem
);

ListItemsContainer.propTypes = {};
export default ListItemsContainer;
