import React from 'react';
import PropTypes from 'prop-types';
import AccountLinkContainer from '../containers/AccountLinkContainer';

const AccountList = ({accountList}) => {
  const accounts = accountList.map(account=> {
    return (
      <tr key={account.id}>
        <AccountLinkContainer id={account.id}>
          {account.id}
        </AccountLinkContainer>
        <AccountLinkContainer id={account.id}>
          {account.username}
        </AccountLinkContainer>
        <AccountLinkContainer id={account.id}>
          ${account.balance}
        </AccountLinkContainer>
      </tr>
    )
  });
  return (
    <div className="col-md-4">
      <div className="col-md-12 well">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Account Number</th>
              <th>User Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts}
          </tbody>
        </table>
      </div>
    </div>
  );
};

AccountList.propTypes = {
  accountList: PropTypes.array.isRequired
};

export default AccountList;