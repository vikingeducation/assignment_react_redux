import { connect } from "react-redux";
import {
  setCategoryFilter,
  setPurchaseFilter,
  purchaseGrocery
} from "../actions";
import GroceryList from "../components/GroceryList";
import serialize from "form-serialize";

const getVisibleGroceries = (groceries, category, purchased) =>
  groceries.filter(
    grocery =>
      (category === "All" || grocery.category === category) &&
      (purchased === "All" || purchased === grocery.purchased)
  );

const mapStateToProps = state => {
  return {
    groceries: getVisibleGroceries(
      state.groceries,
      state.categoryFilter,
      state.purchaseFilter
    ),
    purchaseFilter: state.purchaseFilter,
    categoryFilter: state.categoryFilter,
    categories: ["All"].concat(state.categories)
  };
};

const purchaseOpts = {
  null: "All",
  true: "Purchased",
  false: "Not Purchased"
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterGrocery: e => {
      e.preventDefault();
      const data = serialize(e.target, { hash: true });
      dispatch(setCategoryFilter(data.category));
      dispatch(setPurchaseFilter(purchaseOpts[data.purchased]));
    },
    onPurchaseGrocery: id => e => {
      e.preventDefault();
      dispatch(purchaseGrocery(id));
    }
  };
};

const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(
  GroceryList
);

export default GroceryListContainer;
