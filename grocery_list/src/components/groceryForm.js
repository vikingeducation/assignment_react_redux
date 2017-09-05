import React from 'react';

export default ({ onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="name">Item Name</label>
			<input type="text" name="name" />

			<label htmlFor="description">Description</label>
			<input type="text" name="description" />

			<label htmlFor="category">Category</label>
			<select name="category">
				<option value="dairy">Dairy</option>
				<option value="bakery">Bakery</option>
			</select>

			<label htmlFor="amount">Amount</label>
			<input type="number" name="amount" />

			<button type="submit">Submit</button>
		</form>
	);
};
