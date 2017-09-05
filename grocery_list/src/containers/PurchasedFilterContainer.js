import { connect } from "react-redux";
import PurchasedFilter from "../components/PurchasedFilter";
import serialize from "form-serialize";
import { setPurchasedFilter } from "../actions.js";

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      e.preventDefault();
      const data = e.target.value;

      dispatch(setPurchasedFilter(data));
    }
  };
};

const PurchasedFilterContainer = connect(null, mapDispatchToProps)(
  PurchasedFilter);

export default PurchasedFilterContainer;