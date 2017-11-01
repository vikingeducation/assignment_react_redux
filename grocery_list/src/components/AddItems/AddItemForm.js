/****************************
A form that takes in inputs and adds an items object to the groceryList array.
*****************************/

import React from "react";
import PropTypes from "prop-types";

const AddItemForm = props => {
	const { onSubmit, showFormHandler } = props;
	return (
		<div className="add_item_container mx-auto mb-5">
			<div className="add_item_btn_container rounded col-12 row my-4">
				<h4 className="col-11 my-auto">Add Item</h4>
				<button
					type="button"
					className="add_item_plus col-1 rounded my-auto btn"
					id="add_item_toggle"
					aria-label="Add Item button"
					onClick={e => showFormHandler(e)}
				/>
			</div>
			<form
				className="add_item_display_none form-group  mx-auto row "
				id="add_item_form"
				onSubmit={onSubmit}>
				<label className="sr-only" for="category">
					Category
				</label>
				<input
					className="col-3 col-md-2 border-primary m-1"
					id="category_input"
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
					className="col-4 col-md-2 border-primary m-1"
					name="name"
					type="text"
					maxlength="15"
					placeholder="Name"
				/>

				<label className="sr-only" for="description">
					Description
				</label>
				<input
					className="col-4 col-md-3 border-primary m-1"
					name="description"
					type="text"
					placeholder="Description"
					maxlength="30"
				/>
				<label className="sr-only" for="amount">
					Amount
				</label>
				<input
					className="col-4 col-md-2 border-primary m-1"
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
					className="col-3 col-md-2 border-primary m-1"
					name="price"
					type="number"
					placeholder="Price"
					min="1"
					maxlength="10"
				/>

				<button
					className="btn btn-outline-success col-4 col-md-4 ml-1 mx-md-auto my-md-4"
					type="submit">
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
