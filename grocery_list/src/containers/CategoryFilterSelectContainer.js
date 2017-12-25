import { connect } from 'react-redux';
import CategoryFilterSelect from '../components/CategoryFilterSelect';
import { setCategoryFilter } from '../actions';

const categoryOptions = (items) => {
  const options = [];
  options.push({ value: 'ALL_ITEMS', name: 'All Items' });

  let categories = items.map(item => item.category);
  categories = Array.from(new Set(categories));

  for (let category of categories) {
    options.push({ value: category, name: category });
  }

  return options;
};

const mapStateToProps = (state) => {
  return {
    options: categoryOptions(state.items)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(setCategoryFilter(e.target.value));
    }
  };
};

const CategoryFilterSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryFilterSelect);

export default CategoryFilterSelectContainer;
