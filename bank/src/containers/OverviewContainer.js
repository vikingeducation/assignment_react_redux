import { connect } from 'react-redux'
import Overview from '../components/Overview'

function currentBalance(current, accounts) {
  let account = accounts.filter((account) => {
    return account.id === current
  })
  return account[0].balance
}

const mapStateToProps = (state) => {
  return {
    activeAccount: state.activeAccount,
    currentBalance: currentBalance(state.activeAccount, state.accounts)
  }

}

const OverviewContainer = connect(
  mapStateToProps,
  null
)(Overview)

export default OverviewContainer
