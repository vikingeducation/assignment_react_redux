import {connect} from 'react-redux'
// Import serialize to get the serialized form data
import serialize from 'form-serialize'
//Import the createPuppy action creator
import {depositMoney} from './actions'
// Import the presentational component
import DepositMoney from './components/DepositMoney'


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, {hash: true})
      console.log(data)
      dispatch(depositMoney(Number.parseInt(data.id), Number.parseInt(data.amount)))
      form.reset()
    }
  }
}


const DepositMoneyContainer = connect(
  null,
  mapDispatchToProps
)(DepositMoney)

export default DepositMoneyContainer