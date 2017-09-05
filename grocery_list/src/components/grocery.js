import React from 'react';

export default ({ id, name, amount, description, category, purchased, onSubmit }) => {


	return (
		<div className={purchased ? "purchased groceryItem" : "unPurchased groceryItem"} >
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
			{purchased ? <p>Purchased!</p> : 
				<form onSubmit={onSubmit}>
					<input type="hidden" name="id" value={id} />
					<button>Purchase</button>
				</form>
			}
			
		</div>
	);
};
