import {connect} from 'react-redux';
import FilterLink from '../components/FilterLink';

import {setPurchasedFilter} from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.purchasedFilter === ownProps.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: event => {
      event.preventDefault();
      dispatch(setPurchasedFilter(ownProps.filter));
    }
  };
};

const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);

export default FilterLinkContainer;
