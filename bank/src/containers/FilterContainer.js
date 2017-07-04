import { connect } from "react-redux";
import Filter from "../components/Filter";
import { setTransactionFilter } from "../actions";
import serialize from "form-serialize";


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      let newFilter = {
        start: Date.parse(data.start),
        end: Date.parse(data.end)
      };
      form.reset();
      dispatch(setTransactionFilter(newFilter));
    }
  };
};

const FilterContainer = connect(null, mapDispatchToProps)(
  Filter
);

export default FilterContainer;