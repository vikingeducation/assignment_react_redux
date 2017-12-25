import React from 'react';
import PropTypes from 'prop-types';
import Select from './elements/Select';

const SortByDate = ({ onSort }) => {
  const options = [
    {
      value: 'NONE',
      name: 'None'
    },
    {
      value: 'NEWEST',
      name: 'Newest'
    },
    {
      value: 'OLDEST',
      name: 'Oldest'
    }
  ];

  return (
    <div className="SortByDate container">
      <div className="row justify-content-left">
        <div className="col-md-6">
          <b>Sort By Date:</b>
          <Select options={options} onChange={onSort} />
        </div>

      </div>
    </div>
  );
};

SortByDate.propTypes = {
  onSort: PropTypes.func.isRequired
};

export default SortByDate;
