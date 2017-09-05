import React from 'react';
import GroceryItem from './groceryItem';
import { connect } from 'react-redux';

const groceryList = ({ items }) => {
	if (!items) return null;
	return (
		<div className="row">
			{items.map(grocery => <GroceryItem key={grocery.id} {...grocery} />)}
		</div>
	);
};

const mapStateToProps = state => ({
	items: state.groceries.items
});

const GroceryListContainer = connect(mapStateToProps, null)(groceryList);

export default GroceryListContainer;
