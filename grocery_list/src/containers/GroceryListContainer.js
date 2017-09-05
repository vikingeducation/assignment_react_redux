import { connect } from "react-redux";
import GroceryList from "../components/GroceryList";

const showPurchased = items => {
  return items.map(item => {
    return {
      name: item.name,
      description: item.description,
      amount: item.amount,
      category: item.category,
      purchased: item.purchased ? "purchased" : "not purchased",
      id: item.id
    };
  });
};

// const mapStateToProps = state => {
//   return { groceryItems: state.items };
// };

const mapStateToProps = state => {
  return { groceryItems: showPurchased(state.items) };
};

const GroceryListContainer = connect(mapStateToProps, null)(GroceryList);

export default GroceryListContainer;
