import React from "react";
import PropTypes from "prop-types";

import AccountCard from './AccountCard';

const accountList = accounts =>
  accounts.map(account => <AccountCard account={account} key={account.id} />);

const noAccounts = <p className="text-muted">No accounts found</p>;

const AccountList = ({accounts}) => {
  return (
    <div className="container">
      <div className="card-deck">
        {accounts.length ? accountList(accounts) : noAccounts}
      </div>
    </div>
  )
}

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired
};

export default AccountList;
