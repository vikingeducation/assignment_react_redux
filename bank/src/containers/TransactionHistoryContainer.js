import { connect } from 'react-redux'
import TransactionHistory from '../components/TransactionHistory'

const getAccountTransactions = (accounts, id) => {
  return accounts.filter((account) => (
      account.id === id
    ))
    // return account[0].transactions
}

const mapStateToProps = (state) => {
  return {
    account: getAccountTransactions(state.accounts, state.activeAccount)
  }
}

const TransactionHistoryContainer = connect(
  mapStateToProps,
  null
)(TransactionHistory)

export default TransactionHistoryContainer
