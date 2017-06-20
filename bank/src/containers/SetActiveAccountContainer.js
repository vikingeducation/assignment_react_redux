import { connect } from 'react-redux'
import { setAccount } from '../actions'
import SetActiveAccount from '../components/SetActiveAccount'

const mapStateToProps = (state) => {
  return {
    activeAccount: state.activeAccount,
    accounts: state.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAccount: (e) => {
      let id = parseInt(e.target.value, 10)
      dispatch(setAccount(id))
    }
  }
}

const SetActiveAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetActiveAccount)

export default SetActiveAccountContainer
