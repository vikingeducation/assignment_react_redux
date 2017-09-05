import React from "react";
import { Panel, Button } from "react-bootstrap";

const Grocery = ({
  id,
  name,
  description,
  amount,
  category,
  purchased,
  onClick
}) => {
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
      {!purchased && (
        <Button onClick={onClick} bsStyle="success">
          Purchase
        </Button>
      )}
    </Panel>
  );
};

export default Grocery;
