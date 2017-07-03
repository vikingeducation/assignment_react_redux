import React from "react";
import ProductDetail from "./elements/ProductDetail";
import PurchaseButton from "./PurchaseButton";

const GroceryCard = ({ groceryItem, onPurchaseClick }) => {
  const { image, name, category, description, amount, purchased } = groceryItem;
  return (
    <div className="col-md-4">
      <div className="col-md-12 grocery-card well">
        <img src={image} className="img-responsive" alt="Image of product" />
        <ProductDetail type="Name" data={name} />
        {category ? <ProductDetail type="Category" data={category} /> : null}
        <ProductDetail type="Description" data={description} />
        {amount ? <ProductDetail type="Amount" data={amount} /> : null}
        <PurchaseButton
          purchased={purchased}
          onPurchaseClick={onPurchaseClick}
        />
      </div>
    </div>
  );
};

export default GroceryCard;
