'use strict'

import React from 'react'
import Button from './button'

const likeButton = () => {
  return <Button handleClick={() => {alert('like button')}}>
    Curtir
    </Button>
}

export default likeButton
