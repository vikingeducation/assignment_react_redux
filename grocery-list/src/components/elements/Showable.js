import React, {PropTypes} from 'react'

const Showable = ({show, children}) => {
  if (!show) {
    return null
  }

  return <div>{children}</div>
}

Showable.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Showable
