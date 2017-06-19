import React from 'react'

const Label = ({ text, labelFor }) => {
  labelFor = labelFor || text

  labelFor = labelFor.toLowerCase()

  return (
    <label htmlFor={labelFor} className="col-form-label">
      {text}
      </label>
  )
}

export default Label
