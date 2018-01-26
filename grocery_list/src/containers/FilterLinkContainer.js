import {connect} from 'react-redux'
import {setCategoriesFilter,
        setPurchasedFilter} from '../actions'
import FilterLink from '../components/FilterLink'


const mapStateToProps = (state, ownProps) => {
  return {
    active: state.groceryFilters === ownProps.filter
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      e.preventDefault()
      if (ownProps.filter === 'SHOW_ALL_CATEGORIES') {
        dispatch(setCategoriesFilter(ownProps.filter))
      } else {
        dispatch(setPurchasedFilter(ownProps.filter))
      }

    }
  }
}

const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)

export default FilterLinkContainer
