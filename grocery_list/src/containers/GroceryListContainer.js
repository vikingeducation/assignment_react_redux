import { connect } from "react-redux";
import { setCategoryFilter } from "../actions";
import GroceryList from "../components/GroceryList";
import serialize from "form-serialize";

const mapStateToProps = state => {
  return {
    groceries: state.groceries,
    purchaseFilter: state.purchaseFilter,
    categoryFilter: state.categoryFilter,
    categories: state.categories
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
