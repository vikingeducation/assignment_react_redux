import React from 'react';
import PropTypes from 'prop-types';

const Table = ({head, rows}) => {
  return (
    <table className="table">
      <thead>
        {head}
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  head: PropTypes.node.isRequired,
  rows: PropTypes.node.isRequired
};

export default Table;
