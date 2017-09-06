import React, { PropTypes } from "react";
import Item from "./Item";

const ItemList = ({ groceries, onClick, onPurchase }) => {
  //get a better key later
  let items = groceries.map((item, index) => {
    return (
      <div key={item.id}>
        <Item
          item={item}
          id={item.id}
          onClick={onClick}
          onPurchase={onPurchase}
        />
      </div>
    );
  });
  return (
    <div className="">
      <h1>Groceries: </h1>
      <div className="card-deck">
        {items}
      </div>
      <p>
        {/* things plz */}
        {/* {items[0].name} */}
      </p>
    </div>
  );
};
//
// ItemList.propTypes = {
//
// }

export default ItemList;
