import React from 'react';
import PropTypes from 'prop-types';
import InfoSection from './elements/InfoSection';
import AccountInfoList from './AccountInfoList';
import AddDepositContainer from '../containers/AddDepositContainer';
import WithdrawalContainer from '../containers/WithdrawalContainer';
import TransferContainer from '../containers/TransferContainer';

const SelectedAccount = ({ account }) => {
  let accountInfo;
  if (account === 'NONE') {
    accountInfo = <p className="text-center">No account selected</p>;
  } else {
    accountInfo = (
      <div className="AccountInfo container">
        <AccountInfoList account={account}/>
        <AddDepositContainer />
        <WithdrawalContainer />
        <TransferContainer />
      </div>
    );
  }

  return (
    <InfoSection title="Selected Account" col="6">
      {accountInfo}
    </InfoSection>
  );
};

SelectedAccount.propTypes = {
  account: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
};

export default SelectedAccount;
