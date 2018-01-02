import React, {Component} from "react";
import PropTypes from "prop-types";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const Form = ({onSubmit}) => {
   return (
     <form className="container" onSubmit={onSubmit}>
      <h1>
        Add A Grocery{" "}
        <span className="glyphicon glyphicon-search" aria-hidden="true" />
      </h1>
      <InputGroup name="name" labelText="Name">
        <Input name="name" />
      </InputGroup>
      <InputGroup name="description" labelText="description">
        <Input name="description" />
      </InputGroup>
      <InputGroup name="desiredAmount" labelText="Desired Amount">
        <Input name="desiredAmount" />
      </InputGroup>
      <InputGroup name="category" labelText="Category">
        <Input name="category" />
      </InputGroup>
      <Button type="submit" color="primary">
        Save Grocery
      </Button>
    </form>
   );
  };

class AddGrocery extends Component {
  constructor(props) {
    super(props);
    const { onSubmit } = props;

    this.state = {
      view: "invisible"
    };
  }

  toggleForm = () => {
    if (this.state.view === 'visible') {
      this.setState({
        view: 'invisible',
      })
    } else {
      this.setState({
        view: 'visible',
      })
    }
  }

  render() {
    let view = this.state.view;
    let onSubmit = this.props.onSubmit;

    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggleForm}> Add Grocery </button> 
        {view === "visible" ? <Form onSubmit={onSubmit}/> : null}
      </div>
    );
  }
}

AddGrocery.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddGrocery;
