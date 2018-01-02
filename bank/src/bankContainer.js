
import {connect} from 'react-redux'

import React, {PropTypes} from 'react'

import {viewAccount} from './actions'


const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  }
}





