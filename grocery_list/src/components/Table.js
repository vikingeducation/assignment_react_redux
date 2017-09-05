import React, { PropTypes } from "react";
import TableRow from "./elements/TableRow";
import TableHead from "./elements/TableHead";

const Table = ({ groceryItems }) => {
  console.log(groceryItems);
  const tableRows = groceryItems.map(item => <TableRow props={item} />);
  const tableHead = <TableHead props={groceryItems[0]} />;

  return (
    <table class="table">
      {tableHead}
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

Table.propTypes = {};

export default Table;
