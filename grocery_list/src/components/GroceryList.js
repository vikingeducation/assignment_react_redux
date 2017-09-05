import React, { PropTypes } from "react";
import Table from "./elements/Table";

const GroceryList = ({ groceryItems }) => {
  return <Table dataArray={groceryItems} />;
};

GroceryList.propTypes = {
  groceryItems: PropTypes.array.isRequired
};

export default GroceryList;
