import React, { PropTypes } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";

const Item = ({ item, onClick, id, onPurchase }) => {
  const { name, description, amount, category, purchased } = item;
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">
          Item: {name}
        </p>
        <p className="card-text">
          About Me: I'm a {description}
        </p>
        <p className="card-text">
          Needed: {amount}
        </p>
        <p className="card-text">
          Look in : {category}
        </p>
        <p className="card-text">
          {purchased}
          {purchased ? "Purchased" : "Not bought yet"}
        </p>
        <form onSubmit={onPurchase}>
          <Input name="id" type="hidden" value={id} />
          <Button type="submit" size="sm" color="success">
            Purchase
          </Button>
        </form>
        <form onSubmit={onClick}>
          <Input name="id" type="hidden" value={id} />
          <Button type="submit" size="sm" color="danger">
            Remove From List
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Item;

// {name: "hat", description: "a sweet hat", amount: 1, category: "hats", purchased: false}
