import React from 'react';
import PropTypes from 'prop-types';
import InfoSection from './elements/InfoSection';
import Table from './elements/Table';
import Button from './elements/Button';
import SortByDateContainer from '../containers/SortByDateContainer';
import { formatDate } from '../helpers/accounts';

const Accounts = ({accounts, selectedAccount, onSelectAccount}) => {
  const head = (
    <tr>
      <th scope="col">Account Number</th>
      <th scope="col">Date Opened</th>
      <th scope="col"></th>
    </tr>
  );

  const rows = accounts.map(account => {
    let status;
    if (selectedAccount && selectedAccount.id === account.id) {
      status = <span className="text-success">Currently Selected</span>;
    } else {
      status = (
        <Button
          size="sm"
          color="success"
          onClick={() => onSelectAccount(account.id)}
        >
          Select
        </Button>
      );
    }

    return (
      <tr key={account.id}>
        <td>{account.id}</td>
        <td>{formatDate(account.start_date)}</td>
        <td>{status}</td>
      </tr>
    );
  });

  return (
    <InfoSection title="Accounts" col="6">
      <SortByDateContainer />
      <Table head={head} rows={rows} />
    </InfoSection>
  );
};

Accounts.propTypes = {
  accounts: PropTypes.array.isRequired,
  selectedAccount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onSelectAccount: PropTypes.func.isRequired
};

export default Accounts;
