'use strict'

import React from 'react'

const Userinfo = () => (
  <div className='user-info'>
    <img src='https://avatars2.githubusercontent.com/u/23390758?v=4' />
    <h2>
        <a href='https://api.github.com/users/luanlazz'>Luan Lazzari</a>
    </h2>

    <ul className='repos-info'>
      <li>Repositories: 13</li>
      <li>Folowers: 2</li>
      <li>Folowing: 2</li>
    </ul>
  </div>
)

export default Userinfo