import {connect} from 'react-redux'
import GroceryList from '../components/GroceryList'
import {purchaseItem} from '../actions'



const getFilteredPurchases = (groceryList, filter) => {
  switch (filter) {
    case 'SHOW_PURCHASED':
      return groceryList.filter( (item) => item.purchased)
    case 'SHOW_NOT_PURCHASED':
      return groceryList.filter( (item) => !item.purchased)
    case 'SHOW_ALL_CATEGORIES':
    return groceryList
      // return getCategories(groceryList)
    default:
      return groceryList
  }
}

// const getCategories = (groceryList) => {
//   const allCategories = groceryList.map( (item) => item.category)
//   return allCategories.filter( (item, pos) => {
//       return allCategories.indexOf(item) == pos;
//   })
// }



const mapStateToProps = (state) => {
  return {
    groceryList: getFilteredPurchases(state.groceryList, state.groceryFilters)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markPurchase: (groceryItem) => {
      dispatch(purchaseItem(groceryItem))
    }
  }
}

const GroceryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList)

export default GroceryListContainer
