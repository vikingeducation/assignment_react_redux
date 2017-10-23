/****************************
A form that takes in inputs and adds an items object to the groceryList array.
*****************************/

import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm, SubmissionError } from "redux-form";
const renderField = ({
	type,
	label,
	input,
	max,
	min,
	meta: { touched, error }
}) => {
	return (
		<div className="add_item_input">
			<label>{label}</label>
			<input
				type={type}
				{...input}
				placeholder={label}
				autocomplete="on"
				max={max}
				min={min}
			/>
			{touched && error && <span className="input_error">error</span>}
		</div>
	);
};
const AddItemFormFunc = props => {
	const { handleSubmit, handleFormSubmit } = props;
	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<Field
				name="category"
				label="Category"
				component={renderField}
				type="text"
			/>
			<Field name="name" label="Name" component={renderField} type="text" />
			<Field
				name="description"
				label="Description"
				component={renderField}
				type="text"
			/>
			<Field
				name="amount"
				label="Amount"
				component={renderField}
				type="number"
				max="1000000"
				min="1"
			/>
			<Field
				name="price"
				label="Price"
				component={renderField}
				type="number"
				max="1000000"
			/>
			<button type="submit">Add Item</button>
		</form>
	);
};

const AddItemForm = reduxForm({
	form: "addItem"
})(AddItemFormFunc);

AddItemForm.propTypes = {};

export default AddItemForm;
