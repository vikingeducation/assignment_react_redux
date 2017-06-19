// Import the connect function from React-Redux
import { connect } from 'react-redux'
import { purchaseItem, removeItem } from '../actions'
// Import the presentational component
import GroceryList from '../components/GroceryList'


const filterGroceries = (collection, category, purchased) => {
  if (category === 'ALL' && purchased === 'ALL') {
    return collection
  }
  if (category === 'ALL') {
    return collection.filter((item) => (
      item.purchased === purchased
    ))
  }
  if (purchased === 'ALL') {
    return collection.filter((item) => (
      item.category === category
    ))
  }
  return collection.filter((item) => (
    item.category === category && item.purchased === purchased
  ))
}

const sortGroceries = (collection, orderBy, order) => {
  let sign = order === 'ASC' ? -1 : 1
  return [...collection].sort(function(a, b) {
    if (a[orderBy] > b[orderBy]) {
      return -1 * sign
    }
    if (a[orderBy] < b[orderBy]) {
      return 1 * sign
    }
    return 0
  })
}

const sortAndFilter = (state) => {
  let items = filterGroceries(state.groceries, state.categoryFilter, state.purchasedFilter)
  return sortGroceries(items, state.orderBy, state.order)

}

const mapStateToProps = (state) => {
  return {
    items: sortAndFilter(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    purchaseItem: (e) => {
      dispatch(purchaseItem(parseInt(e.target.getAttribute('data-id'), 10)))
    },
    removeItem: (e) => {
      const id = e.target.getAttribute('data-id')
      dispatch(removeItem(parseInt(id), 10))
    }
  }
}


const GroceryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList)

export default GroceryListContainer
