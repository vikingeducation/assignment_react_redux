import React from 'react';
import GroceryFilter from './groceryFilter';

export default props => {
	return (
		<form>
			<GroceryFilter
				name="purchaseFilter"
				options={['All', 'Purchased', 'Not Purchased']}
				prettyName="Filter Purchases"
				onFilter={props.onFilterPurchase}
			/>
			<GroceryFilter
				name="categoryFilter"
				options={['All', 'Dairy', 'Bakery']}
				prettyName="Filter Categories"
			/>
		</form>
	);
};
