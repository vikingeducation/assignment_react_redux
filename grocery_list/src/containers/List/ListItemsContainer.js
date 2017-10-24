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

const mapStateToProps = (state, ownProps) => {
	return {
		groceryList: state.groceryList
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
