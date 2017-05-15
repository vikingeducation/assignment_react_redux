import React from "react";
import PropTypes from "prop-types";

const AccountCard = ({ account }) => {
  const { id, balance } = account;

  return (
    <div className="card" style={{ maxWidth: "320px" }}>
      <div className="card-header">
        Account ID: {id}
      </div>
      <div className="card-block">
        Balance: {balance}
      </div>
    </div>
  );
};

AccountCard.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountCard;
