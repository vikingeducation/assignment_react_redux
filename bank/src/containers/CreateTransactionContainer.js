import { connect } from 'react-redux'
import CreateTransaction from '../components/CreateTransaction'
import serialize from 'form-serialize'
import { deposit, withdraw } from '../actions'

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    activeAccount: state.activeAccount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTransaction: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, { hash: true })
      switch (data.type) {
        case 'DEPOSIT':
          if (data.amount) {
            dispatch(deposit(parseInt(data.amount, 10)))
          }
          break;
        case 'WITHDRAWAL':
          if (data.amount) {
            dispatch(withdraw(parseInt(data.amount, 10)))
          }
          break;
        default:
          break;
      }
      form.reset()
    }
  }
}


const CreateTransactionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTransaction)

export default CreateTransactionContainer
