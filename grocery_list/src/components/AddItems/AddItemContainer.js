import React from "react";
import PropTypes from "prop-types";
import AddItemForm from "./AddItemForm";

const renderField = ({ type, label, input, meta: { touched, error } }) => {
	return (
		<div className="add_item_input">
			<label>{label}</label>
			<input type={type} {...input} placeholder={label} />
			{touched && error && <span className="input_error">error</span>}
		</div>
	);
};

const AddItemContainer = ({ onSubmit, values }) => {
	console.log("Container Values", values);
	return (
		<div className="add_items_container" render={renderField}>
			<h3>Add Items</h3>
			<AddItemForm renderField={renderField} onSubmit={onSubmit(values)} />
		</div>
	);
};

AddItemContainer.propTypes = {};
export default AddItemContainer;
