import React, { PropTypes } from "react";

const Item = ({ item }) => {
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
          Bought? {purchased}
        </p>
      </div>
    </div>
  );
};
export default Item;

// {name: "hat", description: "a sweet hat", amount: 1, category: "hats", purchased: false}
