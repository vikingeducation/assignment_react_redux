/****************************
A form that takes in inputs and adds an items object to the groceryList array.
*****************************/

import React from "react";
import PropTypes from "prop-types";

const AddItemForm = props => {
	const { onSubmit } = props;
	return (
		<form onSubmit={onSubmit}>
			<h3>Add Item</h3>
			<label for="category">Category</label>
			<input name="category" type="text" maxlength="15" required />
			<label for="name">Name</label>
			<input name="name" type="text" maxlength="15" />
			<label for="description">Description</label>
			<input name="description" type="text" maxlength="30" />
			<label for="amount">Amount</label>
			<input name="amount" type="number" min="1" maxlength="10" />
			<label for="price">price</label>
			<input name="price" type="number" min="1" maxlength="10" />

			<button type="submit">Add Item</button>
		</form>
	);
};

AddItemForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default AddItemForm;

/****************************
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
*****************************/
