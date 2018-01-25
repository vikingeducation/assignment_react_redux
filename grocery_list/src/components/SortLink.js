import React from 'react'
import PropTypes from 'prop-types'
// import FontAwesome from 'react-fontawesome'


// <FontAwesome
//   className="fa fa-sort-alpha-desc"
//   name='fa-sort-alpha-desc'
//   icon='fa-sort-alpha-desc'
//   size='3x'
//   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
// />

const SortLink =({active, onClick, children}) => {

  if (active) {
    return <span>{children}</span>
  }

  return (   <a href='#' onClick={onClick}>
                {children}
              </a>
          )
}

SortLink.propTypes = {
  sortType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}


export default SortLink
