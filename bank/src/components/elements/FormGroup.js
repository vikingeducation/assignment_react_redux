import React from 'react'

const FormGroup = ({ children, classes }) => {
  classes = classes || ''
  return (

    <div className={`form-group ${classes}`}>
    {children}
    </div>)
}

export default FormGroup
