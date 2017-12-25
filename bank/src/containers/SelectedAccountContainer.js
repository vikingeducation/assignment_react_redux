import { connect } from 'react-redux';
import SelectedAccount from '../components/SelectedAccount';

const mapStateToProps = (state) => {
  return {
    account: state.selectedAccount
  };
};

const SelectedAccountContainer = connect(
  mapStateToProps
)(SelectedAccount);

export default SelectedAccountContainer;
