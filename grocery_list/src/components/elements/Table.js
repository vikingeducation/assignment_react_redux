import React, { PropTypes } from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

const Table = ({ dataArray }) => {
  if (dataArray.length<1) return null;
  const tableRows = dataArray.map(dataObject =>
    <TableRow props={dataObject} />
  );
  const tableHead = <TableHead props={dataArray[0]} />;

  return (
    <table className="table">
      {tableHead}
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  dataArray: PropTypes.array.isRequired
};

export default Table;
