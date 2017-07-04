import { connect } from "react-redux";
import FilterLink from "../components/FilterLink";
import {
  setPurchasedFilter,
  setCategoryFilter,
  setSortFilter
} from "../actions";

const mapStateToProps = (state, ownProps) => {
  if (ownProps.filterType === "purchaseFilter") {
    return {
      active: state.productFilters.purchased === ownProps.filter
    };
  } else if (ownProps.filterType === "categoryFilter") {
    return {
      active: state.productFilters.category === ownProps.filter
    };
  } else if (ownProps.filterType === "sortFilter") {
    return {
      active: state.productFilters.sort === ownProps.filter
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: e => {
      // Don't reload the page
      e.preventDefault();
      // Pass in the filter for that link to set it in the store
      if (ownProps.filterType === "purchaseFilter") {
        dispatch(setPurchasedFilter(ownProps.filter));
      } else if (ownProps.filterType === "categoryFilter") {
        dispatch(setCategoryFilter(ownProps.filter));
      } else if (ownProps.filterType === "sortFilter") {
        dispatch(setSortFilter(ownProps.filter));
      }
    }
  };
};

const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(
  FilterLink
);

export default FilterLinkContainer;
