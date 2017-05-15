import React from "react";
import PropTypes from "prop-types";
import InputGroup from './elements/InputGroup';
import Input from './elements/Input';
import Button from './elements/Button';

const displayedAccount = selected => (
  <div className="card">
    <div className="card-header">
      Account ID: {selected.id}
    </div>
    <div className="card-body">
      Balance: {selected.balance}
    </div>
  </div>
);

const SelectAccount = ({selected, onSubmit}) => {

  return (
    <div className="container">
      {selected ? displayedAccount(selected) : null}
      <form onSubmit={onSubmit}>
        <InputGroup name="accountId" labelText="Account ID">
          <Input name="accountId" />
        </InputGroup>
        <Button color="primary" />
      </form>
    </div>
  );
};

SelectAccount.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SelectAccount;
