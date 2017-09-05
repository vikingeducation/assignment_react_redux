import React, { Component } from "react";
import TableRow from "./elements/TableRow";
import TableHead from "./elements/TableHead";

const Table = ({ groceryItems }) => {
  const tableRows = groceryItems.map(item => <TableRow props={item} />);
  const tableHead = <TableHead props={groceryItems[0]} />;

  return (
    <table class="table">
      <thead />

      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

export default Table;
