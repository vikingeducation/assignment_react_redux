import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const GroceryItem = ({ groceryItem, onPurchased }) => {
  const {
    name,
    description,
    desiredAmount,
    currentAmount,
    category
  } = groceryItem;

  const purchasedStatus = desiredAmount === currentAmount;
  let color = purchasedStatus ? "card-outline-success" : "card-outline-warning";
  console.log(onPurchased);

  return (
    <div
      className={`GroceryItem card mb-3 ${color}`}
      style={{ maxWidth: "320px" }}
    >
      <div className="card-block">
        <h4>{name}</h4>
        <p>Description: {description}</p>
        <p>
          Status: ({currentAmount}/{desiredAmount})
        </p>
        <p>Category: {category}</p>
        <button className="btn btn-primary" onClick={() => onPurchased(name)}>
          Purchase
        </button>
      </div>
    </div>
  );
};

GroceryItem.propTypes = {
  onPurchased: PropTypes.func.isRequired
};

export default GroceryItem;
