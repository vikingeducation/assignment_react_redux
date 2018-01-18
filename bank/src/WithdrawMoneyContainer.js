import { connect } from "react-redux";
// Import serialize to get the serialized form data
import serialize from "form-serialize";
//Import the createPuppy action creator
import { withdrawMoney } from "./actions";
// Import the presentational component
import WithdrawMoney from "./components/WithdrawMoney";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log(data);
      dispatch(
        withdrawMoney(Number.parseInt(data.id), Number.parseInt(data.amount))
      );
      form.reset();
    }
  };
};

const WithdrawMoneyContainer = connect(null, mapDispatchToProps)(WithdrawMoney);

export default WithdrawMoneyContainer;
