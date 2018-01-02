import React, { PropTypes } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";

const TransferMoney = ({ onSubmit }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>
      Transfer Money
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h1>
    <InputGroup name="id" labelText="ID of Giver">
      <Input name="id" />
    </InputGroup>
    <InputGroup name="id1" labelText="ID of Receiver">
      <Input name="id1" />
    </InputGroup>
    <InputGroup name="name" labelText="Amount">
      <Input name="amount" />
    </InputGroup>
    <Button type="submit" color="primary">
      Transfer
    </Button>
  </form>
);

export default TransferMoney;
