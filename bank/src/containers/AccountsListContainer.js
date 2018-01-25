import {connect} from 'react-redux'
import AccountsList from '../components/AccountsList'
import { default as _ } from 'lodash'


const mapStateToProps = (state) => {
  return {
    accounts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // markPurchase: (groceryItem) => {
    //   dispatch(purchaseItem(groceryItem))
    // }
  }
}

const AccountsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsList)

export default AccountsListContainer
