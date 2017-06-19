import React from 'react'

const Sort = ({ setOrder, orderBy, order }) => {

  return (
    <div id="sort" className="text-right">
    
    <a href="#" onClick={setOrder} data-order="name">Name</a> / <a href="#" onClick={setOrder} data-order="description">Description</a>

    </div>
  )
}
export default Sort
