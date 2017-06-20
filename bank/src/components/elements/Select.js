import React from 'react'

const Select = ({
  options,
  defaultValue,
  disabled,
  classes,
  ...rest
}) => {
  classes = classes || ''

  const opts = options.map((opt) => {
    let key = Object.keys(opt)[0]
    return (<option value={key} key={key} disabled={(disabled === key)}>{opt[key]}</option>)
  })

  return (
    <select className={`custom-select mr-1 ${classes}`} defaultValue={defaultValue}  {...rest}>
{opts}
  </select>
  )
}


export default Select
