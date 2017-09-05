import React from "react";
import AddGroceryContainer from "../containers/AddGroceryContainer";
import Grocery from "./Grocery";

const GroceryList = props => {
  console.log(props, "show props");
  return (
    <div>
      <div className="grocery-list col-sm-6">
        <h3>Add a grocery</h3>
        <AddGroceryContainer />
      </div>

      <div className="col-sm-6">
        <h3>Grocery List</h3>
        {!props.groceries.length && <p>Your grocery list is empty!</p>}
        {props.groceries.map(grocery => {
          console.log(grocery);
          return <Grocery key={`${grocery.name}${grocery.id}`} {...grocery} />;
        })}
      </div>
    </div>
  );
};

export default GroceryList;
