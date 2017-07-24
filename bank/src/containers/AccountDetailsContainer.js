import { connect } from "react-redux";
import serialize from "form-serialize";
import AccountDetails from "../components/AccountDetails";
import { depositMoney, withdrawMoney, transferMoney } from "../actions";
import { calculateBalances } from "../helpers";

const mapStateToProps = state => {
  const selectedAccount = state.accounts[state.selectedAccount];
  return {
    selectedAccount: calculateBalances(selectedAccount, state.transactions),
    accounts: state.accounts.filter(account => account.id !== state.selectedAccount)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDepositSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      data.timestamp = Date.now();
      form.reset();
      dispatch(depositMoney(data));
    },
    onWithdrawSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      data.timestamp = Date.now();
      form.reset();
      dispatch(withdrawMoney(data));
    },
    onTransferSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      data.timestamp = Date.now();
      form.reset();
      dispatch(transferMoney(data));
    },
  };
};


const AccountDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(
  AccountDetails
);

export default AccountDetailsContainer;