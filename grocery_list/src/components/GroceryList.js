import React from "react";
import PropTypes from "prop-types";

import PurchasedFilters from "./PurchasedFilters";
import GroceryCard from "./GroceryCard";
import FilterSelectContainer from "../containers/FilterSelectContainer";
import SortContainer from '../containers/SortContainer';

const groceryList = (items, purchaseItem) =>
  items.map(item => (
    <GroceryCard
      item={item}
      key={item.id}
      onPurchaseClick={() => purchaseItem(item.id)}
    />
  ));

const noGroceries = <p className="text-muted">No items found</p>;
const GroceryList = ({ items, purchaseItem }) => {
  return (
    <div className="container">
      <h2>Your Groceries</h2>
      <PurchasedFilters />
      <FilterSelectContainer />
      <SortContainer />
      <div className="card-deck">
        {items.length ? groceryList(items, purchaseItem) : noGroceries}
      </div>
    </div>
  );
};

GroceryList.propTypes = {
  items: PropTypes.array.isRequired,
  purchaseItem: PropTypes.func.isRequired
};

export default GroceryList;
