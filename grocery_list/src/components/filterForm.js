import React from 'react';
import GroceryFilter from "./groceryFilter"

export default () => {
	return (
		<form>
			<GroceryFilter name="purchaseFilter" options={["All", "Purchased", "Not Purchased"]}/>
			<GroceryFilter name="categoryFilter" options={["All", "Dairy", "Bakery"]}/>
		</form>
	)
}