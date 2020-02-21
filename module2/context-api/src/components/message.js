'use strict'

import React from 'react'
import WithContext from './with-context'

const Message = ({ store, text, color }) => (
  <li style={{ backgroundColor: store.color }}>
    {text}
    <button onClick={store.setColor(color)}>Change color</button>
  </li>
)

export default WithContext(Message)
