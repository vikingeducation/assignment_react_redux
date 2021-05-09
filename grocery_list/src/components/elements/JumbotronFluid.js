import React, {PropTypes} from 'react'
import Showable from './Showable'

const JumbotronFluid = ({heading, lead}) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <Showable show={!!heading}>
        <h1 className="display-3">{heading}</h1>
      </Showable>
      <Showable show={!!lead}>
        <p className="lead">{lead}</p>
      </Showable>
    </div>
  </div>
)

JumbotronFluid.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
}

export default JumbotronFluid
