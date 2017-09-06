import { connect } from "react-redux";
import {
  setCategoryFilter,
  setPurchaseFilter,
  setOrderBy,
  purchaseGrocery
} from "../actions";
import GroceryList from "../components/GroceryList";
import serialize from "form-serialize";

const getVisibleGroceries = (groceries, category, purchased) => {
  return groceries.filter(grocery => {
    return (
      (category === "All" || grocery.category === category) &&
      (purchased === null || purchased === grocery.purchased)
    );
  });
};

const sortGroceries = (groceries, order) => {
  order = order.toLowerCase();
  return groceries.sort((a, b) => {
    [a, b] = [a[order].toLowerCase(), b[order].toLowerCase()];
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
};

const mapStateToProps = state => {
  return {
    groceries: sortGroceries(
      getVisibleGroceries(
        state.groceries,
        state.categoryFilter,
        state.purchaseFilter
      ),
      state.orderBy
    ),
    purchaseFilter: state.purchaseFilter,
    categoryFilter: state.categoryFilter,
    orderBy: state.orderBy,
    categories: ["All"].concat(state.categories)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterGrocery: e => {
      e.preventDefault();
      const data = serialize(e.target, { hash: true });
      dispatch(setCategoryFilter(data.category));
      dispatch(
        setPurchaseFilter(
          data.purchased === "null" ? null : JSON.parse(data.purchased)
        )
      );
      dispatch(setOrderBy(data.order));
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
