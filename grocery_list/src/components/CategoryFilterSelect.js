import React from 'react';
import Proptypes from 'prop-types';
import Select from './elements/Select';

const CategoryFilterSelect = ({options, onChange}) => {
  return (
    <div className="CategoryFilterSelect">
      <Select options={options} onChange={onChange} />
    </div>
  );
};

CategoryFilterSelect.propTypes = {
  options: Proptypes.array.isRequired,
  onChange: Proptypes.func.isRequired
};

export default CategoryFilterSelect;
