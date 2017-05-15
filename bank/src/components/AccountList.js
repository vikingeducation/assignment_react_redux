import React from "react";
import PropTypes from "prop-types";

const accountList = accounts =>
  accounts.map(account => <AccountCard account={account} key={account.id} />);
