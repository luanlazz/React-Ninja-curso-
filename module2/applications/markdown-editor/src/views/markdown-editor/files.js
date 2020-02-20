'use strict'

import React from 'react'

const Files = () => (
  <div className='files-list-container'>
    <h2>Files</h2>

    <ul>
      <li>
        <button onClick={() => console.log('Clicou')}>arquivo</button> 
      </li>
    </ul>
  </div>
)

export default Files