import React from 'react';
import PropTypes from 'prop-types';
import { formatDate, formatMoney } from '../helpers/accounts';

const AccountInfoList = ({ account }) => {
  return (
    <div className="AccountInfoList account-section">
      <dl>
        <dt>Account Number:</dt>
        <dd>{account.id}</dd>
        <dt>Customer Name:</dt>
        <dd>{account.customer}</dd>
        <dt>Account Balance:</dt>
        <dd>{formatMoney(account.balance)}</dd>
        <dt>Open Since:</dt>
        <dd>{formatDate(account.start_date)}</dd>
      </dl>
    </div>
  );
};

AccountInfoList.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountInfoList;
