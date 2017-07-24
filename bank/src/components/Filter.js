import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from "./elements/InputGroup";
import Input from "./elements/Input";
import Button from "./elements/Button";

const Filter = ({onSubmit}) => {
  return (
    <div className="well">
      <h4>Filter by Date and Time</h4>
      <form onSubmit={onSubmit}>
        <InputGroup name="start" labelText="Start Date">
          <Input name="start" type="datetime-local" required/>
        </InputGroup>
        <InputGroup name="end" labelText="End Date">
          <Input name="end" type="datetime-local" required/>
        </InputGroup>
        <Button type="submit" color="success">Set Filter</Button>
      </form>
    </div>
  );
};

Filter.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Filter;