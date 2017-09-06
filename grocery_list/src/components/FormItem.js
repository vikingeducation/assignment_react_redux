import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const FormItem = ({ name, attrs, children }) => (
  <FormGroup>
    <ControlLabel>{name}</ControlLabel>
    <FormControl {...attrs}>{children}</FormControl>
  </FormGroup>
);

export default FormItem;
