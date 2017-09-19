import { connect } from "react-redux";
import GroceryList from "../components/GroceryList";

const filterPurchased = state => {
  let filteredItems;
  filteredItems = state.items.filter(item => {
    switch (state.purchasedFilter) {
      case "PURCHASED":
        return item.purchased;
      case "NOT_PURCHASED":
        return !item.purchased;
      default:
        return true;
    }
  });
  console.log("GLC line 16", filteredItems);
  return {
    ...state,
    items: filteredItems
  };
};

const filterCategory = state => {
  if (state.categoryFilter.length < 1) return state;
  return state.items.filter(item => /state.categoryFilter/.test(item.category));
};

const revealPurchase = state => {
  const items = state.items.map(item => {
    return {
      ...item,
      purchased: item.purchased ? "purchased" : "not purchased"
    };
  });
  return { ...state, items };
};

const mapStateToProps = state => {
  return {
    groceryItems: revealPurchase(filterCategory(filterPurchased(state))).items
  };
};

const GroceryListContainer = connect(mapStateToProps, null)(GroceryList);

export default GroceryListContainer;
