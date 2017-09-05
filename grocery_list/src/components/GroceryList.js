import React from "react";
import AddGroceryContainer from "../containers/AddGroceryContainer";
import Grocery from "./Grocery";
import FilterForm from "./FilterForm";

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
        <FilterForm categories={props.categories} onSubmit={props.onSubmit} />
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
