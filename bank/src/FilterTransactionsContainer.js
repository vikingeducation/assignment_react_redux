import { connect } from "react-redux";
// Import serialize to get the serialized form data
import serialize from "form-serialize";
//Import the createPuppy action creator
import { transactionFilter } from "./actions";
// Import the presentational component
import FilterTransactions from "./components/FilterTransactions";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, {
        hash: true
      });
      console.log(data.endDate);
      console.log(data.startDate);
      console.log(data);
      dispatch(
        transactionFilter(
          new Date(data.startDate),
          new Date(data.endDate),
          Number.parseInt(data.id)
        )
      );
      form.reset();
    }
  };
};

const FilterTransactionsContainer = connect(null, mapDispatchToProps)(
  FilterTransactions
);

export default FilterTransactionsContainer;
