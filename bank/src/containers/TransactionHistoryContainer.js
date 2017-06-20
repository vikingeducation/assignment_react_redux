import { connect } from 'react-redux'
import TransactionHistory from '../components/TransactionHistory'
import { filter } from '../actions'
import serialize from 'form-serialize'

const getAccount = (accounts, id) => {
  return accounts.filter((account) => (
    account.id === id
  ))
}

const mapStateToProps = (state) => {
  return {
    account: getAccount(state.accounts, state.activeAccount),
    dates: state.filterDates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDates: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, { hash: true })
      data.end = data.end ? new Date(data.end) : null
      data.start = data.start ? new Date(data.start) : null
      dispatch(filter(data.start, data.end))

    }
  }
}

const TransactionHistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistory)

export default TransactionHistoryContainer
