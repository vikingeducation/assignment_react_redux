import React from "react";
import PropTypes from "prop-types";
import GroceryItem from "./GroceryItem";

const GroceryList = ({ groceryItems, onPurchased }) => {
  // Generate the groceryItem card for each groceryItem
  const groceryItemList = groceryItems.map((groceryItem, idx) => {
    return (
      <GroceryItem
        groceryItem={groceryItem}
        key={idx}
        onPurchased={onPurchased}
      />
    );
  });

  const noGroceryItems = <p className="text-muted">Oops no groceries...</p>;

  // Using Bootstrap 4 card layout
  return (
    <div className="GroceryList container">
      <div className="card-deck">
        {groceryItems.length > 0 ? groceryItemList : noGroceryItems}
      </div>
    </div>
  );
};

GroceryList.propTypes = {
  groceryItems: PropTypes.array.isRequired,
  onPurchased: PropTypes.func.isRequired
};

export default GroceryList;
