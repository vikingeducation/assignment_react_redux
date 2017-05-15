import { connect } from "react-redux";
import GroceryList from "../components/GroceryList";
import { purchaseItem } from "../actions";

const filterItemsByPurchased = (items, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return items;
    case "SHOW_PURCHASED":
      return items.filter(item => item.purchased);
    case "SHOW_NOT_PURCHASED":
      return items.filter(item => !item.purchased);
    default:
      return items;
  }
};

const filterItemsByCategory = (items, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return items;
    default:
      return items.filter(item => item.category === filter);
  }
};

const mapStateToProps = state => {
  let items = filterItemsByPurchased(state.items, state.purchasedFilter);
  items = filterItemsByCategory(items, state.categoryFilter);
  return { items };
};

const mapDispatchToProps = dispatch => {
  return {
    purchaseItem: id => {
      dispatch(purchaseItem(id));
    }
  };
};

const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(
  GroceryList
);

export default GroceryListContainer;
