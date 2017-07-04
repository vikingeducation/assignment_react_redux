import React from "react";
import PropTypes from "prop-types";
import GroceryCard from "./GroceryCard";

const GroceryList = ({ groceryList, purchaseProduct }) => {
  const groceryCards = groceryList.map(groceryItem =>
    <GroceryCard
      groceryItem={groceryItem}
      key={groceryItem.id}
      onPurchaseClick={() => purchaseProduct(groceryItem.id)}
    />
  );

  const noGroceries = <p>No groceries, add something to get started!</p>;
  return (
    <div className="row">
      {groceryList.length > 0 ? groceryCards : noGroceries}
    </div>
  );
};

GroceryList.propTypes = {
  groceryList: PropTypes.array.isRequired
};

export default GroceryList;
