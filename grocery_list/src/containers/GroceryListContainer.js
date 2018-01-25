import {connect} from 'react-redux'
import GroceryList from '../components/GroceryList'
import {purchaseItem} from '../actions'
import { default as _ } from 'lodash'



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

const sortItems = (items, field, direction) => {
  return _.orderBy(items, field, direction);
};

const getSortedData = (groceryList, sortType) => {
  switch (sortType) {
    case 'SORT_BY_NAME_DESC':
      return sortItems(groceryList, ['name'], 'desc')
    case 'SORT_BY_NAME_ASC':
      return sortItems(groceryList, ['name'],'asc')
    case 'SORT_BY_DESCRIPT_DESC':
      return sortItems(groceryList, ['description'],'desc')
    case 'SORT_BY_DESCRIPT_ASC':
      return sortItems(groceryList, ['description'],'asc')
    default:
      return groceryList
  }
}



const mapStateToProps = (state) => {
  const filteredGroceries = getFilteredPurchases(state.groceryList, state.groceryFilters)
  const sortedGroceries = getSortedData(filteredGroceries, state.grocerySorter)
  return {
    groceryList: sortedGroceries
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
