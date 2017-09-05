import React from "react";

GroceryForm = ({onSubmit}) => {
	<form onSubmit={onSubmit}>
		<label htmlFor="name">Item Name</label>
		<input type="text" name="name" />

		<label htmlFor="description">Description</label>
		<input type="text" name="description" />

		<select>
		</select>

		<label htmlFor="amount">Amount</label>
		<input type="text" name="amount" />

	</form>
}import React from "react";