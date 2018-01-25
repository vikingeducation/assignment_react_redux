import {connect} from 'react-redux'
import SortLink from '../components/SortLink'
import {setSorting} from '../actions'



const mapStateToProps = (state, ownProps) => {
  return {
    active: state.grocerySorter === ownProps.sortType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      e.preventDefault()
      dispatch(setSorting(ownProps.sortType))
    }
  }
}


const SortLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortLink)

export default SortLinkContainer
