import React, { PropTypes } from "react";
import Item from "./Item";

const ItemList = ({ groceries }) => {
  //get a better key later
  let items = groceries.map((item, index) => {
    return (
      <div key={index}>
        <Item item={item} />
        {/* <div className="btn btn-success">Bootstrap??</div> */}
      </div>
    );
  });
  console.log("item list sees ", groceries);
  return (
    <div className="row">
      <h1>Groceries: </h1>
      <div className="card-deck col-12">
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
