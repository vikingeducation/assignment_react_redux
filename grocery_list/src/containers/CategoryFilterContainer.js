import { connect } from "react-redux";
import CategoryFilter from "../components/CategoryFilter";
import { setCategoryFilter } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      const data = e.target.value;
      dispatch(setCategoryFilter(data));
    }
  };
};

const CategoryFilterContainer = connect(null, mapDispatchToProps)(
  CategoryFilter
);

export default CategoryFilterContainer;
