import { connect } from "react-redux";
import SelectAccount from "../components/SelectAccount";
import { setSelectedAccount } from "../actions";

import serialize from 'form-serialize';

const mapStateToProps = state => {
  return {
    selected: state.accountState.selectedAccount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: event => {
      event.preventDefault();
      const form = event.target;
      const data = serialize(form, { hash: true });
      dispatch(setSelectedAccount(data.accountId));
    }
  };
};

const SelectAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAccount);

export default SelectAccountContainer;
