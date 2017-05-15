import { connect } from "react-redux";
import AccountList from "../components/AccountList";

const mapStateToProps = state => {
  return {
    accounts: state.accountState.accounts
  };
};

const AccountListContainer = connect(mapStateToProps)(AccountList);

export default AccountListContainer;
