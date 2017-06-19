import { connect } from 'react-redux'
import { setCategoryFilter, setPurchasedFilter } from '../actions'
import serialize from 'form-serialize'
import Filter from '../components/Filter'

const mapStateToProps = (state) => {
  return {
    categoryFilter: state.categoryFilter,
    purchasedFilter: state.purchasedFilter,
    categories: state.categories,
    purchasedFilters: state.purchasedFilters
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filterCategory: (e) => {
      e.preventDefault()
      dispatch(setCategoryFilter(e.target.value))
    },
    filterPurchased: (e) => {
      e.preventDefault()
      dispatch(setPurchasedFilter(e.target.value))
    }

  }
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer
