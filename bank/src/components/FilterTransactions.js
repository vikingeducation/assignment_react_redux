import React, { PropTypes } from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";

const FilterTransactions = ({ onSubmit }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>
      Filter Transactions by Date
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h1>
    <InputGroup name="startDate" labelText="Start Date">
      <Input name="startDate" />
    </InputGroup>
    <InputGroup name="endDate" labelText="End Date">
      <Input name="endDate" />
    </InputGroup>
    <InputGroup name="id" labelText="ID">
      <Input name="id" />
    </InputGroup>
    <Button type="submit" color="primary">
      Filter
    </Button>
  </form>
);

export default FilterTransactions;
