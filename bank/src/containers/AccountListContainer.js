import { connect } from "react-redux";
import AccountList from "../components/AccountList";

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};

const AccountListContainer = connect(mapStateToProps)(AccountList);

export default AccountListContainer;
