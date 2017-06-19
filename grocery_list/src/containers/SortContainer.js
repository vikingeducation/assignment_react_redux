// Import the connect function from React-Redux
import { connect } from 'react-redux'
import { setSortOrder, setOrder } from '../actions'
// Import the presentational component
import Sort from '../components/Sort'


const mapStateToProps = (state) => {
  return {
    orderBy: state.orderBy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setOrder: (e) => {
      e.preventDefault()
      const order = e.target.getAttribute('data-order')
      dispatch(setSortOrder(order))
      dispatch(setOrder(order))
    }
  }
}


const SortContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort)

export default SortContainer
