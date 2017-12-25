import { connect } from 'react-redux';
import AddDeposit from '../components/AddDeposit';
import serialize from 'form-serialize';
import { deposit, selectAccount } from '../actions';

const mapStateToProps = (state) => {
  return {
    account: state.selectedAccount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (e) => {
      e.preventDefault();

      const form = e.target;
      const data = serialize(form, { hash: true });

      if (data.id && data.amount) {
        dispatch(deposit({
          id: parseInt(data.id, 10),
          amount: parseInt(data.amount, 10)
        }));

        dispatch(selectAccount(parseInt(data.id, 10)));
      }

      form.reset();
    }
  };
};

const AddDepositContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeposit);

export default AddDepositContainer;
