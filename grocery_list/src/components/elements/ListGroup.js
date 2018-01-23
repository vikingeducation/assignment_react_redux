import React from 'react'
import PropTypes from 'prop-types'

const ListGroup = ({toBuyItems}) => {

  const List = toBuyItems.map((item) => (
    <li class="list-group-item">{item}</li>
  ))


  return (
    <ul class="list-group">
      {List}
    </ul>
  )
}

ListGroup.propTypes = {
  toBuyItems: PropTypes.array.isRequired
}
