import { connect } from "react-redux";
import { setCategoryFilter } from "../actions";
import GroceryList from "../components/GroceryList";
import serialize from "form-serialize";

const getVisibleGroceries = (groceries, category) => {
  if (category === "All") return groceries;
  else return groceries.filter(grocery => grocery.category === category);
};

const mapStateToProps = state => {
  return {
    groceries: getVisibleGroceries(state.groceries, state.categoryFilter),
    purchaseFilter: state.purchaseFilter,
    categoryFilter: state.categoryFilter,
    categories: state.categories.concat(["All"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const data = serialize(e.target, { hash: true });
      console.log(data);
      dispatch(setCategoryFilter(data.category));
    }
  };
};

const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(
  GroceryList
);

export default GroceryListContainer;
