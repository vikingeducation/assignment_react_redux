import React from 'react';
import PropTypes from 'prop-types';
import Select from './elements/Select';

const SortBySelect = ({onChange}) => {
  const options = [
    {
      value: 'NONE',
      name: 'None'
    },
    {
      value: 'NAME',
      name: 'Name'
    },
    {
      value: 'DESCRIPTION',
      name: 'Description'
    }
  ];

  return (
    <Select options={options} onChange={onChange} />
  );
};

SortBySelect.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SortBySelect;
