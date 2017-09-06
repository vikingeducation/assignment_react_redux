import { connect } from "react-redux";
import FilterOption from "../components/FilterOption";
import { setPurchasedFilter } from "../actions";

//add active later
const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: e => {
      e.preventDefault();
      dispatch(setPurchasedFilter(ownProps.filter));
    }
  };
};

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(
  FilterOption
);

export default FilterContainer;
