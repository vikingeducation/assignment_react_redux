import { connect } from 'react-redux';
import Transfer from '../components/Transfer';
import serialize from 'form-serialize';
import { transfer, selectAccount } from '../actions';

const mapStateToProps = (state) => {
  return {
    account: state.selectedAccount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTransfer: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      if (data.from && data.to && data.amount) {
        dispatch(transfer({
          from: parseInt(data.from, 10),
          to: parseInt(data.to, 10),
          amount: parseInt(data.amount, 10)
        }));

        dispatch(selectAccount(parseInt(data.from, 10)));
      }

      form.reset();
    }
  };
};

const TransferContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Transfer);

export default TransferContainer;
