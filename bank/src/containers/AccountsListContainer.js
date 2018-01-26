import {connect} from 'react-redux'
import AccountsList from '../components/AccountsList'


const mapStateToProps = (state) => {
  return {
    accountList: state.accountOps
  }
}


const AccountsListContainer = connect(
  mapStateToProps
)(AccountsList)

export default AccountsListContainer
