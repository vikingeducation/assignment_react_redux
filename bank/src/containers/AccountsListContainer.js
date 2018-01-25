import {connect} from 'react-redux'
import AccountsList from '../components/AccountsList'
import { default as _ } from 'lodash'


const mapStateToProps = (state) => {
  return {
    accountList: state.accountOps
  }
}


const AccountsListContainer = connect(
  mapStateToProps
)(AccountsList)

export default AccountsListContainer
