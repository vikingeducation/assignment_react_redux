import { connect } from "react-redux";
// Import serialize to get the serialized form data
import serialize from "form-serialize";
//Import the createPuppy action creator
import { transferMoney } from "./actions";
// Import the presentational component
import TransferMoney from "./components/TransferMoney";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log(data);
      dispatch(
        transferMoney(
          Number.parseInt(data.id),
          Number.parseInt(data.id1),
          Number.parseInt(data.amount)
        )
      );
      form.reset();
    }
  };
};

const TransferMoneyContainer = connect(null, mapDispatchToProps)(TransferMoney);

export default TransferMoneyContainer;
