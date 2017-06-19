import React from 'react'

const Select = (props) => {
  const { options, defaultValue, ...rest } = props
  const opts = options.map((opt) => {
    let key = Object.keys(opt)[0]
    return (<option value={key} key={key}>{opt[key]}</option>)
  })



  return (
    <select className="custom-select mr-1" defaultValue={defaultValue} {...rest}>
{opts}
  </select>
  )
}


export default Select
