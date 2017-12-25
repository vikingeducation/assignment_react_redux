import React from 'react';
import PropTypes from 'prop-types';

const InfoSection = props => {
  const { title, col, children } = props;

  return (
    <div className={"InfoSection col-lg-" + col}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-center">{title}</h3>
        </div>
        <div className="card-block">
          <div className="card-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string,
  col: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default InfoSection;







