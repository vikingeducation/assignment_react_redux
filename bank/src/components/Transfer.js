import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from './elements/InputGroup';
import Input from './elements/Input';
import Button from './elements/Button';

const Transfer = ({ account, onTransfer }) => {
  return (
    <div className="Transfer">
      <h4 className="text-primary">Transfer Money</h4>
      <form onSubmit={onTransfer}>
        <input type="hidden" name="from" value={account.id} />
        <div className="row justify-content-left align-items-center">
          <div className="col-sm-6">
            <InputGroup name="to" labelText="To Account Number">
              <Input type="number" name="to" />
            </InputGroup>
          </div>
          <div className="col-sm-6">
            <InputGroup name="amount" labelText="Amount (in cents)">
              <Input type="number" name="amount" />
            </InputGroup>
          </div>
          <Button type="submit" color="success" className="transfer-btn">Transfer Funds</Button>
        </div>
      </form>
    </div>
  );
};

Transfer.propTypes = {
  account: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  onTransfer: PropTypes.func.isRequired
};

export default Transfer;
