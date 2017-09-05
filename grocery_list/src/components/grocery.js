import React from 'react';

export default ({ id, name, amount, description, category, purchased }) => {


	return (
		<div className="groceryItem">
			<h3>
				{name}
			</h3>
			<div>
				<strong>Quantity</strong>: {amount}
			</div>
			<div>
				<strong>Description</strong>: {description}
			</div>
			<div>
				<strong>Category</strong>: {category}
			</div>

			<button onClick={}>Purchase</button>
		</div>
	);
};
