import React from 'react'


const TableHeader = ({ headers }) => {
  const cols = headers.map((header) => {
    return <th key={header}>{header}</th>
  })

  return (
    <thead>
    <tr>
    {cols}
    </tr>
    </thead>
  )

}

export default TableHeader
