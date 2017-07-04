import { connect } from "react-redux";
import AccountList from "../components/AccountList";

const mapStateToProps = state => {
  return {
    accountList: state.accounts
  }
};

const AccountListContainer = connect(mapStateToProps, null)(
  AccountList
);

export default AccountListContainer;