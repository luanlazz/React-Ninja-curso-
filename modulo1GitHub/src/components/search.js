'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input 
      type='serach' 
      placeholder='Enter the name of user'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
