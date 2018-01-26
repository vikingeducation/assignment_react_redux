import React from 'react'
import PropTypes from 'prop-types'
import InputGroup from './elements/InputGroup'
import Input from './elements/Input'
import Button from './elements/Button'

const AddNewItem = ({onSubmit}) => (
  <div className='row'>
    <div className="col-3">
    </div>
    <div className="col-6">

    <br />
      <form className="container" onSubmit={onSubmit} >
        <h4>Add New Item to Purchase</h4>
        <InputGroup name="name" labelText="Name">
          <Input name="name" />
        </InputGroup>
        <InputGroup name="description" labelText="Description">
          <Input name="description" />
        </InputGroup>
        <InputGroup name="amount" labelText="Amount">
          <Input name="amount" />
        </InputGroup>
        <InputGroup name="category" labelText="Category">
          <Input name="category" />
        </InputGroup>
        <Button type="submit" color="primary">Save Item to the List</Button>
      </form>

    </div>
    <div className="col-3">
    </div>
  </div>

)

AddNewItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddNewItem
