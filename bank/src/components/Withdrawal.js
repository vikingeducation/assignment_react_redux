import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from './elements/InputGroup';
import Input from './elements/Input';
import Button from './elements/Button';

const Withdrawal = ({ account, onWithdraw }) => {
  return (
    <div className="Withdrawal account-section">
      <h4 className="text-primary">Withdraw</h4>
      <form onSubmit={onWithdraw}>
        <input type="hidden" name="id" value={account.id} />
        <div className="row justify-content-left align-items-center">
          <div className="col-sm-6">
            <InputGroup name="amount" labelText="Amount (in cents)">
              <Input type="number" name="amount" />
            </InputGroup>
          </div>
          <div className="col-sm-6">
            <Button type="submit" color="success" className="deposit-btn">Withdraw</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

Withdrawal.propTypes = {
  account: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  onWithdraw: PropTypes.func.isRequired
};

export default Withdrawal;
