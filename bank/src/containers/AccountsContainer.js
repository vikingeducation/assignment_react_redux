import { connect } from 'react-redux';
import Accounts from '../components/Accounts';
import { selectAccount } from '../actions';

const sortByDate = (accounts, sort) => {
  let sorted;
  switch (sort) {
  case 'NONE':
    sorted = accounts.sort((a, b) => a.id > b.id);
    return sorted.map(item => {
      return {
        ...item, key: item.id
      };
    });
  case 'NEWEST':
    sorted = accounts.sort((a, b) => a.start_date < b.start_date);
    return sorted.map(item => {
      return {
        ...item, key: item.id
      };
    });
  case 'OLDEST':
    sorted = accounts.sort((a, b) => a.start_date > b.start_date);
    return sorted.map(item => {
      return {
        ...item, key: item.id
      };
    });
  default:
    return accounts;
  }
};

const mapStateToProps = (state) => {
  return {
    accounts: sortByDate(state.accounts, state.sortByDate),
    selectedAccount: state.selectedAccount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectAccount: (id) => {
      dispatch(selectAccount(id));
    }
  };
};

const AccountsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);

export default AccountsContainer;
