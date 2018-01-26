import {connect} from 'react-redux'
import Transactions from '../components/Transactions'
import serialize from 'form-serialize'
import {depositMoney,
        withdrawMoney,
        transferMoney} from '../actions'



const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, {hash: true})
      if (data.transaction === 'Deposit') {
        dispatch(depositMoney(data))
      } else if (data.transaction === 'Withdraw') {
        dispatch(withdrawMoney(data))
      } else {
        dispatch(transferMoney(data))
      }
      form.reset()
    }
  }
}

const TransactionsContainer = connect(
  null,
  mapDispatchToProps
)(Transactions)

export default TransactionsContainer
