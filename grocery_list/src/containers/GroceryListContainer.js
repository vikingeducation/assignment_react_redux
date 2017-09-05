import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import GroceryList from "../components/GroceryList";

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
    actions: bindActionCreators(actions, dispatch)
  };
};

const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(
  GroceryList
);

export default GroceryListContainer;
