import { connect } from 'react-redux'
import Transfer from '../components/Transfer'
import serialize from 'form-serialize'
import { transfer } from '../actions'

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    activeAccount: state.activeAccount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    transferFunds: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, { hash: true })
      if (data.amount && data.to !== 'NULL') {
        dispatch(transfer(parseInt(data.to, 10), parseInt(data.amount, 10)))
      }
      form.reset()
    }
  }
}

const TransferContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Transfer)

export default TransferContainer
