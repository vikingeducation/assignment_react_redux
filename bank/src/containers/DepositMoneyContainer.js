import {connect} from 'react-redux'
import DepositMoney from '../components/DepositMoney'
import serialize from 'form-serialize'
import {depositMoney} from '../actions'


// const mapStateToProps = (state) => {
//   return {
//     accountList: state.accountOps
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, {hash: true})

      dispatch(depositMoney(data))
    }
  }
}

const DepositMoneyContainer = connect(
  null,
  mapDispatchToProps
)(DepositMoney)

export default DepositMoneyContainer
