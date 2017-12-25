import { connect } from 'react-redux';
import SortBySelect from '../components/SortBySelect';
import { setSortBy } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(setSortBy(e.target.value));
    }
  };
};

const SortBySelectContainer = connect(
  null,
  mapDispatchToProps
)(SortBySelect);

export default SortBySelectContainer;
