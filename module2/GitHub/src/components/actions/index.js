'use strict'

import React, { PropTypes } from 'react'
import './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Repositories</button>
    <button onClick={getStarred}>Favorites</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
