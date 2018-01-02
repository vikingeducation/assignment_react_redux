import React, { PropTypes } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";

const WithdrawMoney = ({ onSubmit }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>
      Withdraw Money
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h1>
    <InputGroup name="id" labelText="ID">
      <Input name="id" />
    </InputGroup>
    <InputGroup name="name" labelText="Amount">
      <Input name="amount" />
    </InputGroup>
    <Button type="submit" color="primary">
      Withdraw
    </Button>
  </form>
);

export default WithdrawMoney;
