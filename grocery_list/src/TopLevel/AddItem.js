/****************************
contains additemform

Takes no props
*****************************/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddItemForm from "../components/AddItems/AddItemForm";
import { addItem } from "../actions";

const AddItemContainer = (handleFormSubmit, values) => {
	return (
		<div className="add_items_container">
			<h3>Add Items</h3>
			<AddItemForm onSubmit={values => handleFormSubmit(values)} />
		</div>
	);
};

const mapPropsToState = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleFormSubmit: values => {
			dispatch(addItem(values));
		}
	};
};
const AddItem = connect(mapPropsToState, mapDispatchToProps)(AddItemForm);

AddItem.propTypes = {};
export default AddItem;
