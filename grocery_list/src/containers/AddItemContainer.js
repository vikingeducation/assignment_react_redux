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
// changes icon of add item btn,
// toogles display of add item form(flex/none)
// focuses on catefory input element when add item is shown
const showFormHandler = e => {
	e.preventDefault();
	let form = document.getElementById("add_item_form");
	let formClasses = form.className;
	if (formClasses.includes("add_item_display_flex")) {
		document.getElementById("add_item_toggle").className =
			"add_item_plus col-1 rounded my-auto btn";

		form.className = "add_item_display_none form-group  mx-auto row";
	} else {
		form.className = "add_item_display_flex form-group  mx-auto row ";
		document.getElementById("add_item_toggle").className =
			"add_item_minus col-1 rounded my-auto btn";
		document.getElementById("category_input").focus();
	}
};

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
			form.reset();
		},
		showFormHandler: showFormHandler
	};
};
const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(
	AddItemForm
);

AddItemContainer.propTypes = {};
export default AddItemContainer;
