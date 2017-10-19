import React, {PropTypes} from 'react'

const Button = (props) => {
  const {size, color, children, type, ...rest} = props
  const sizeClass = size ? `btn-${size}` : ''

  return (
    <button
      type={type}
      className={`btn btn-${color} ${sizeClass}`}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  color: 'default',
  children: 'Submit',
}

// Set PropTypes for Button
Button.propTypes = {
  // size is optional, but it must be a string if present
  size: PropTypes.string,
  // color is required, and it must be a string
  color: PropTypes.string.isRequired,
  // children is required and it can be anything that can
  // be rendered (like a string, element, number, etc.)
  children: PropTypes.node.isRequired,
  // type is optional, but it must be a string
  type: PropTypes.string,
}

export default Button
