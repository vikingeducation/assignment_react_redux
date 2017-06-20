import React from 'react';
import PropTypes from 'prop-types'
import Form from './Form'
import Label from './elements/Label'
import Input from './elements/Input'
import FormGroup from './elements/FormGroup'

const AddItem = ({ onSubmit }) => {


  return (
    <section id="add-item">
    <h2>Add Item</h2>
    <Form onSubmit={onSubmit}>
    <FormGroup>
      <Label text="Name" />
      <Input name="name" type="text" />
    </FormGroup>
    <FormGroup>
      <Label text="Quantity" />
      <Input name="quantity" type="number" min="0" step="1" />
    </FormGroup>
     <FormGroup>
      <Label text="Category" />
      <Input type="text" name="categories" />
    </FormGroup>
    <FormGroup>
      <Label text="Description" />
      <Input name="description"/>
    </FormGroup>
    <FormGroup>
      <Label text="Purchased" />
       &nbsp; <input type="checkbox" name="purchased" />
    </FormGroup> 
    <button type="submit" className="btn btn-primary">Add Item</button>
    </Form>
    </section>
  )
}

AddItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddItem
