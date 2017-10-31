import React from "react";
import PropTypes from "prop-types";
import ListHeaderContainer from "../containers/List/ListHeaderContainer";
import ListItemsContainer from "../containers/List/ListItemsContainer";
import ListTotalContainer from "../containers/List/ListTotalContainer";

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
	return filterCategory(filterPurchased(list, filter), category);
};

const List = props => {
	return (
		<div className=" list_container w-75 p-3">
			<ListHeaderContainer />
			<ListItemsContainer filterList={filterList} />
			<ListTotalContainer filterList={filterList} />
		</div>
	);
};

List.propTypes = {};
export default List;
