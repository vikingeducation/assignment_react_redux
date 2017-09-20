import React from "react";
import PropTypes from "prop-types";
import PurchaseButton from "./PurchaseButton";

const GroceryCard = ({ item, onPurchaseClick }) => {
  const { name, description, category, purchased, quantity } = item;

  return (
    <div className="card" style={{ maxWidth: "320px" }}>
      <div className="card-block">
        <h3>{name}</h3>
        <h4>Quantity: {quantity}</h4>
        <h5>{category}</h5>
        <p>{description}</p>
        <PurchaseButton
          purchased={purchased}
          onPurchaseClick={onPurchaseClick}
        />
      </div>
    </div>
  );
};

GroceryCard.propTypes = {
  item: PropTypes.object.isRequired,
  onPurchaseClick: PropTypes.func.isRequired
};

export default GroceryCard;
