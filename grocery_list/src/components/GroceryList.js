import React from 'react';
import PropTypes from 'prop-types';

import GroceryCard from './GroceryCard';

const GroceryList = ({items}) => {

  const groceryList = items.map(item => (
    <GroceryCard
      item={item}
      key={item.id}
    />
  ));

  const noGroceries = (
    <p className="text-muted">No items found</p>
  );

  return (
    <div className="container">
      <h2>Your Groceries</h2>
      <div className="card-deck">
        {items.length ? groceryList : noGroceries}
      </div>
    </div>
  );
};

GroceryList.propTypes = {
  items: PropTypes.array.isRequired
}

export default GroceryList;
