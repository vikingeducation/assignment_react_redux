import React from 'react';
import PropTypes from 'prop-types';
import Select from './elements/Select';

const PurchaseFilterSelect = ({onChange}) => {
  const options = [
    {
      value: 'ALL_ITEMS',
      name: 'All Items'
    },
    {
      value: 'PURCHASED',
      name: 'Purchased'
    },
    {
      value: 'NOT_PURCHASED',
      name: 'Not Purchased'
    }
  ];

  return (
    <div className="PurchaseFilterSelect">
      <Select options={options} onChange={onChange} />
    </div>
  );
};

PurchaseFilterSelect.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default PurchaseFilterSelect;
