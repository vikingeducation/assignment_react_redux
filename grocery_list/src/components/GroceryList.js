import React from "react";
import AddGroceryContainer from "../containers/AddGroceryContainer";
import Grocery from "./Grocery";
import FilterForm from "./FilterForm";

const GroceryList = props => {
  return (
    <div>
      <div className="grocery-list col-sm-6">
        <h3>Add a grocery</h3>
        <AddGroceryContainer />
      </div>

      <div className="col-sm-6">
        <h3>Grocery List</h3>
        <FilterForm {...props} />
        <br />
        {props.groceries.map(grocery => {
          return (
            <Grocery
              key={`${grocery.name}${grocery.id}`}
              {...grocery}
              onClick={props.onPurchaseGrocery(grocery.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GroceryList;
