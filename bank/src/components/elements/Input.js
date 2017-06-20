import React from 'react'
import PropTypes from 'prop-types'


const Input = ({ type, name, classes, ...rest }) => {
  type = type || 'text'
  classes = classes || ''

  return (
    <input type={type} name={name} className={`form-control ${classes}`} {...rest} />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired
}


export default Input
