import React from "react";
import PropTypes from "prop-types";

const AccountLink = ({ onClick, active, children }) => {
  if (active) {
    return (
      <td>
        {children}
      </td>
    )
  }

  return (
    <td>
      <a href="" onClick={onClick}>{children}</a>
    </td>
  );
};

AccountLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default AccountLink;
