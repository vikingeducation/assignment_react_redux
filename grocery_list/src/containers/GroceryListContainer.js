import { connect } from "react-redux";
import GroceryList from "../components/GroceryList";
import {
  createItem,
  purchaseItem,
  setPurchaseFilter,
  setCategoryFilter,
  setNameSort,
  setDescriptionSort
} from "../actions";

// Add puppies prop mapped from state.puppies
const mapStateToProps = state => {
  console.log("state => ", state);
  // Pass in all puppies and the value of the current filter
  // to get the correct set of puppies to pass to props
  return {
    groceryItems: state.groceryList
  };
};

// Add the adopt puppy dispatch action to props
const mapDispatchToProps = dispatch => {
  return {
    onPurchased: (name) => {
      console.log("name: ", name);
      
      dispatch(purchaseItem(name));
    }
  };
};

// Generate the puppy list container which renders
// PuppyList with all the new props
const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(
  GroceryList
);

export default GroceryListContainer;
