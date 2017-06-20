import React from 'react'
import PropTypes from 'prop-types'


const Input = (props) => {
  let { type, name, ...rest } = props
  type = type || 'text'

  return (
    <input type={type} name={name} className="form-control" {...rest} />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired
}


export default Input
