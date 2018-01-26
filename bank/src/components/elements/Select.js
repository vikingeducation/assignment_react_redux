import React from 'react';

const Select = (props) => {
  const {options, placeholder, ...restOfProps} = props
  const optionElements = options.map((option) => (
    <option key={option} value={option} >
      {option}
    </option>
  ))

  return (
    <select className='form-control' {...restOfProps}  >
      <option key={placeholder} value={placeholder} >
        {placeholder}
      </option>
      {optionElements}
    </select>
  )
}

export default Select
