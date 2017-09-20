import { connect } from "react-redux";
import FilterSelect from "../components/FilterSelect";

import { setCategoryFilter } from "../actions";

const mapStateToProps = (state) => {
  let categories = ["SHOW_ALL"];
  state.items.forEach(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  return {
    categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: event => {
      dispatch(setCategoryFilter(event.target.value));
    }
  };
};

const FilterSelectContainer = connect(mapStateToProps, mapDispatchToProps)(
  FilterSelect
);

export default FilterSelectContainer;
