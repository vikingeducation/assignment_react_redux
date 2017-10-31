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

const showFormHandler = e => {
	e.preventDefault();
	let form = document.getElementById("add_item_form");
	let formClasses = form.className;
	if (formClasses.includes("add_item_display_flex")) {
		document.getElementById("add_item_toggle").style.backgroundImage =
			"url(/static/media/minus.c720b464.svg)";
		form.style.display = "none";
		form.className = "form-group  mx-auto row";
	} else {
		document.getElementById("add_item_toggle").style.backgroundImage =
			"url(/static/media/plus.99b344d7.svg)";
		form.style.display = "flex";
		form.className = "add_item_display_flex form-group  mx-auto row";
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
const AddItem = connect(mapStateToProps, mapDispatchToProps)(AddItemForm);

AddItem.propTypes = {};
export default AddItem;
