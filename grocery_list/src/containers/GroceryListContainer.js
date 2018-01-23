import {connect} from 'react-redux'
import GroceryList from '../components/GroceryList'
import {purchaseItem} from '../actions'



const mapStateToProps = (state) => {
  return {
    grocery: state.groceryList
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
