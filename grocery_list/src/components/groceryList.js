import React from "react";
import groceryItem from "./groceryItem";

export default ({ items }) => {
  if (!items) return null;
  return items.map(grocery => <groceryItem key={grocery.id} {...grocery} />);
};
