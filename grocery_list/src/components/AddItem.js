import React from 'react';
import PropTypes from 'prop-types';
import InfoSection from './elements/InfoSection';
import InputGroup from './elements/InputGroup';
import Input from './elements/Input';
import Textarea from './elements/Textarea';
import Button from './elements/Button';

const AddItem = ({onSubmit}) => {
  return (
    <InfoSection title="Add Item" col="4">
      <form className="AddItem container" onSubmit={onSubmit}>
        <InputGroup name="name" labelText="Name">
          <Input name="name" required="required" />
        </InputGroup>
        <InputGroup name="description" labelText="Description">
          <Textarea name="description" />
        </InputGroup>
        <InputGroup name="amount" labelText="Amount">
          <Input name="amount" />
        </InputGroup>
        <InputGroup name="category" labelText="Category">
          <Input name="category" />
        </InputGroup>
        <Button type="submit" color="primary">Add Item</Button>
      </form>
    </InfoSection>
  );
};

AddItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddItem;
