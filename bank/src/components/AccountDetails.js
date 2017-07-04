import React from "react";
import PropTypes from "prop-types";
import InputGroup from "./elements/InputGroup";
import Input from "./elements/Input";
import Button from "./elements/Button";
import Select from "./elements/Select";

const AccountDetails = ({selectedAccount, accounts, onDepositSubmit, onWithdrawSubmit, onTransferSubmit}) => {
  const { id, username, balance } = selectedAccount;
  return (
    <div className="col-md-8">
      <div className="row well">
        <div className="col-md-12">
          <h3>Account: #{id}</h3>
          <h5>Username: {username}</h5>
          <h5>Balance: ${balance}</h5>
        </div>
        <div className="col-md-4">
          <form onSubmit={onDepositSubmit}>
            <InputGroup name="amount" labelText="Deposit Amount">
              <Input name="amount" />
            </InputGroup>
            <input type="hidden" value={selectedAccount.id} name="owner" />
            <Button type="submit" color="success">Deposit</Button>
          </form>
        </div>
        <div className="col-md-4">
          <form onSubmit={onWithdrawSubmit}>
            <InputGroup name="amount" labelText="Withdraw Amount">
              <Input name="amount" />
            </InputGroup>
            <input type="hidden" value={selectedAccount.id} name="owner" />
            <Button type="submit" color="warning">Withdraw</Button>
          </form>
        </div>
        <div className="col-md-4">
          <form onSubmit={onTransferSubmit}>
            <InputGroup name="amount" labelText="Transfer Amount">
              <Input name="amount" />
            </InputGroup>
            <InputGroup name="receiver" labelText="Transfer Recipient">
              <Select name="receiver" options={[...accounts]} />
            </InputGroup>
            <input type="hidden" value={selectedAccount.id} name="owner" />
            <Button type="submit" color="danger">Transfer</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

AccountDetails.propTypes = {
  selectedAccount: PropTypes.object.isRequired, 
  accounts: PropTypes.array.isRequired, 
  onDepositSubmit: PropTypes.func.isRequired, 
  onWithdrawSubmit: PropTypes.func.isRequired
};

export default AccountDetails;