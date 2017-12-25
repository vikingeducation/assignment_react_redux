import { connect } from 'react-redux';
import PurchaseFilterSelect from '../components/PurchaseFilterSelect';
import { setPurchaseFilter } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      dispatch(setPurchaseFilter(e.target.value));
    }
  };
};

const PurchaseFilterSelectContainer = connect(
  null,
  mapDispatchToProps
)(PurchaseFilterSelect);

export default PurchaseFilterSelectContainer
;
