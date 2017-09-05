import React from "react";
import GroceryItem from "./groceryItem";
import { connect } from "react-redux";

const groceryList = ({
  groceries,
  sortBy,
  categoryFilter,
  purchasedFilter
}) => {
  if (!groceries) return null;

  groceries = groceries.filter(grocery => {
    if (purchasedFilter === "SHOW_ALL") return true;
    const purchased = purchasedFilter === "on" ? true : false;
    return grocery.purchased === purchased;
  });

  groceries = groceries.filter(grocery => {
    if (categoryFilter === "SHOW_ALL") return true;
    return grocery.category === categoryFilter;
  });

  const filterHash = {
    Id: (a, b) => a.id - b.id,
    created: (a, b) => a.id - b.id,
    createdDesc: (a, b) => b.id - a.id,
    name: (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0),
    nameDesc: (a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0),
    category: (a, b) =>
      a.category < b.category ? -1 : a.category > b.category ? 1 : 0,
    categoryDesc: (a, b) =>
      a.category < b.category ? 1 : a.category > b.category ? -1 : 0,
    price: (a, b) => (a.amount < b.amount ? -1 : a.amount > b.amount ? 1 : 0),
    priceDesc: (a, b) =>
      a.amount < b.amount ? 1 : a.amount > b.amount ? -1 : 0
  };

  groceries = groceries.sort(filterHash[sortBy]);

  return (
    <div className="row">
      {groceries.map(grocery => <GroceryItem key={grocery.id} {...grocery} />)}
    </div>
  );
};

const mapStateToProps = ({
  groceries,
  sortBy,
  categoryFilter,
  purchasedFilter
}) => ({
  groceries,
  sortBy,
  categoryFilter,
  purchasedFilter
});

const GroceryListContainer = connect(mapStateToProps, null)(groceryList);

export default GroceryListContainer;
