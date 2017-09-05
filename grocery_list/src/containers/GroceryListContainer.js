import { connect } from "react-redux";
import GroceryList from "../components/GroceryList";

const showPurchased = state => {
  let filteredItems;
  filteredItems = state.items.filter(item=>{
    switch (state.purchasedFilter) {
      case "PURCHASED":
        return item.purchased;
      case "NOT_PURCHASED":
        return !item.purchased;
      default:
        return true
    }
  });
  console.log("GLC line 16", filteredItems)
  return {
    ...state,
    items: filteredItems,
  }
}

// const showCategory = state => {
//   return state.items.filter(item=>{item.category === state
    
//     }
//   })
// }


const mapStateToProps = state => {
  console.log("GLContainer line 22", state)
  return { groceryItems: showPurchased(state).items };
};

const GroceryListContainer = connect(mapStateToProps, null)(GroceryList);

export default GroceryListContainer;
