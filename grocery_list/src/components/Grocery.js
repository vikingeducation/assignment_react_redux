import React from "react";
import { Panel } from "react-bootstrap";

const Grocery = ({ id, name, description, amount, category, purchased }) => {
  description = !description.length ? "" : <p>{description}</p>;
  return (
    <Panel bsStyle="primary" header={name}>
      {description}
      Number: {amount}
      <br />
      Category: {category}
      <br />
      Purchased: {String(purchased)}
      <br />
    </Panel>
  );
};

export default Grocery;
