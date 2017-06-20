import React from 'react'

const Overview = ({ currentBalance, activeAccount }) => {
  return (
    <section id="overview">
    <div className="row">
    <div className="col-6 col-md-3">
      <span className="title">Account Number</span>
      <p className="h2">{activeAccount}</p>
    </div>
    <div className="col-6">
      <span className="title">Current Balance</span>
      <p className="h2">${currentBalance.toLocaleString()}</p>
    </div>
    </div>
    </section>
  )
}
export default Overview
