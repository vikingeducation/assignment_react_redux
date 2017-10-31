/****************************
A form that takes in inputs and adds an items object to the groceryList array.
*****************************/

import React from "react";
import PropTypes from "prop-types";

const AddItemForm = props => {
	const { onSubmit } = props;
	return (
		<div className="add_item_container mx-auto w-75 mb-5">
			<form className="form-group d-flex mx-auto row" onSubmit={onSubmit}>
				<h3 className="col-12">Add Item</h3>
				<label className="sr-only" for="category">
					Category
				</label>
				<input
					className="col-3"
					name="category"
					type="text"
					placeholder="Category"
					maxlength="15"
					required
				/>
				<label className="sr-only" for="name">
					Name
				</label>
				<input
					className="col-2"
					name="name"
					type="text"
					maxlength="15"
					placeholder="Name"
				/>

				<label className="sr-only" for="description">
					Description
				</label>
				<input
					className="col-3"
					name="description"
					type="text"
					placeholder="Description"
					maxlength="30"
				/>
				<label className="sr-only" for="amount">
					Amount
				</label>
				<input
					className="col-2"
					name="amount"
					type="number"
					placeholder="Amount"
					min="1"
					maxlength="10"
				/>
				<label className="sr-only" for="price">
					price
				</label>
				<input
					className="col-2"
					name="price"
					type="number"
					placeholder="Price"
					min="1"
					maxlength="10"
				/>

				<button className="col-10 mx-auto my-2" type="submit">
					Add Item
				</button>
			</form>
		</div>
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
