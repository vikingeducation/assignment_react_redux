import React from 'react'

const Label = ({ text, labelFor, classes, ...rest }) => {
  labelFor = labelFor || text

  labelFor = labelFor.toLowerCase()

  classes = classes || ''

  return (
    <label htmlFor={labelFor} className={`col-form-label ${classes}`} {...rest} >
      {text}
      </label>
  )
}

export default Label
