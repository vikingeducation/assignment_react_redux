import { connect } from "react-redux";
import AccountDetails from "../components/AccountDetails";

const mapStateToProps = state => {
  return {
    selectedAccount: state.accounts[state.selectedAccount]
  }
};

const AccountDetailsContainer = connect(mapStateToProps, null)(
  AccountDetails
);

export default AccountDetailsContainer;