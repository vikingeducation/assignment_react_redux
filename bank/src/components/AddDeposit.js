import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from './elements/InputGroup';
import Input from './elements/Input';
import Button from './elements/Button';

const AddDeposit = ({ account, onDeposit }) => {
  return (
    <div className="AddDeposit account-section">
      <h4 className="text-primary">Add Deposit</h4>
      <form onSubmit={onDeposit}>
        <input type="hidden" name="id" value={account.id}/>
        <div className="row justify-content-left align-items-center">
          <div className="col-sm-6">
            <InputGroup name="amount" labelText="Amount (in cents)">
              <Input type="number" name="amount" />
            </InputGroup>
          </div>
          <div className="col-sm-6">
            <Button type="submit" color="success" className="deposit-btn">Deposit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddDeposit.propTypes = {
  account: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  onDeposit: PropTypes.func.isRequired
};

export default AddDeposit;
