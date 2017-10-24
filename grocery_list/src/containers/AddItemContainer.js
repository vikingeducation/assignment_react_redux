/****************************
contains additemform

Takes no props
*****************************/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddItemForm from "../components/AddItems/AddItemForm";
import { addItem } from "../actions";
import serialize from "form-serialize";

const mapStateToProps = (state, ownProps) => {
	let categories = state.groceryList.map(item => {
		return item.category;
	});
	return {
		categories: { categories }
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: e => {
			e.preventDefault();
			const form = e.target; //the addItem form
			const data = serialize(form, { hash: true });
			console.log("Serialized Data", data);
			dispatch(addItem(data));
		}
	};
};
const AddItem = connect(mapStateToProps, mapDispatchToProps)(AddItemForm);

AddItem.propTypes = {};
export default AddItem;
