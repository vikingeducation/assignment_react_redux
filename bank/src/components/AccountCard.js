import React from "react";
import PropTypes from "prop-types";

const AccountCard = ({account}) => {
  const {id} = account;

  return (
    <div className="card" style={{ maxWidth: "320px" }}>
      <div className="card-header">
        Account ID: {id}
      </div>
    </div>
  )
}

AccountCard.propTypes = {
  account: PropTypes.object.isRequired
};

export default AccountCard;
