import { connect } from "react-redux";
import AccountList from "../components/AccountList";
import { calculateBalances } from "../helpers";

const mapStateToProps = state => {
  return {
    accountList: calculateBalances(state.accounts, state.transactions)
  }
};

const AccountListContainer = connect(mapStateToProps, null)(
  AccountList
);

export default AccountListContainer;