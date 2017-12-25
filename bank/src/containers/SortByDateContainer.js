import { connect } from 'react-redux';
import SortByDate from '../components/SortByDate';
import { sortByDate } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSort: (e) => {
      const value = e.target.value;

      dispatch(sortByDate(value));
    }
  };
};

const SortByDateContainer = connect(
  null,
  mapDispatchToProps
)(SortByDate);

export default SortByDateContainer;
