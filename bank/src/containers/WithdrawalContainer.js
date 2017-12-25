import { connect } from 'react-redux';
import Withdrawal from '../components/Withdrawal';
import serialize from 'form-serialize';
import { withdraw, selectAccount } from '../actions';

const mapStateToProps = (state) => {
  return {
    account: state.selectedAccount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWithdraw: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });


      if (data.id && data.amount) {
        dispatch(withdraw({
          id: parseInt(data.id, 10),
          amount: parseInt(data.amount, 10)
        }));

        dispatch(selectAccount(parseInt(data.id, 10)));
      }

      form.reset();
    }
  };
};

const WithdrawalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Withdrawal);

export default WithdrawalContainer;
