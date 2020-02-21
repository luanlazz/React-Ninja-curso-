'use strict'

import React from 'react'
import Message from './message'

const MessageList = ({ messages }) => (
  <ul>
    {messages.map((message) => (
      <Message text={message.text} color={message.color} key={message.text} />
    ))}
  </ul>
)

export default MessageList
