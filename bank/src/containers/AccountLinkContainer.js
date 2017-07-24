import { connect } from "react-redux";
import AccountLink from "../components/AccountLink";
import { selectAccount } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.selectedAccount === ownProps.id
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: e => {
      e.preventDefault();
      dispatch(selectAccount(ownProps.id));
    }
  };
};

const AccountLinkContainer = connect(mapStateToProps, mapDispatchToProps)(
  AccountLink
);

export default AccountLinkContainer;