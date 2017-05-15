import React from "react";
import PropTypes from "prop-types";
import InputGroup from "./elements/InputGroup";
import Input from "./elements/Input";
import Button from "./elements/Button";

const displayedAccount = (selected, onDeposit) => (
  <div className="card my-5">
    <div className="card-header">
      Account ID: {selected.id}
    </div>
    <div className="card-block">
      Balance: {selected.balance}
    </div>
    <div className="card-footer">
      <form onSubmit={onDeposit}>
        <InputGroup name="depositAmount" labelText="Amount to Deposit">
          <Input name="depositAmount" type="number" />
        </InputGroup>
        <Button color="primary" type="submit" />
      </form>
    </div>
  </div>
);

const SelectAccount = ({ selected, onSelectAccount, onDeposit }) => {
  return (
    <div className="container my-3">
      {selected ? displayedAccount(selected, onDeposit) : null}
      <form onSubmit={onSelectAccount}>
        <InputGroup name="accountId" labelText="Account ID">
          <Input name="accountId" type="number" />
        </InputGroup>
        <Button color="primary" type="submit" />
      </form>
    </div>
  );
};

SelectAccount.propTypes = {
  onSelectAccount: PropTypes.func.isRequired,
  onDeposit: PropTypes.func.isRequired
};

export default SelectAccount;
