import React, { PropTypes } from "react";
import Button from "./elements/Button";

const PurchaseButton = ({ purchased, onPurchaseClick }) => {
  if (purchased) {
    return <p className="text-muted">Purchased!</p>;
  }

  return (
    <Button onClick={onPurchaseClick} color="success">
      Purchase
    </Button>
  );
};

PurchaseButton.propTypes = {
  purchased: PropTypes.bool.isRequired,
  onPurchaseClick: PropTypes.func.isRequired
};

export default PurchaseButton;
