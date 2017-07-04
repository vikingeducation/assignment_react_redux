import React from "react";
import PropTypes from "prop-types";

const AccountDetails = ({selectedAccount}) => {
  const { id, username, balance } = selectedAccount;
  return (
    <div className="col-md-8">
      <div className="col-md-12 well">
        <h3>Account: #{id}</h3>
        <h5>Username: {username}</h5>
        <h5>Balance: {balance}</h5>
      </div>
    </div>
  );
}

export default AccountDetails;