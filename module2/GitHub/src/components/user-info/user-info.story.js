'use strict'

import { storiesOf, module } from '@kadira/storybook'
import React from 'react'
import UserInfo from './index'

const user = storiesOf('User-info', module)

user.add('infos', () => (
  <UserInfo
    userinfo={{
      username: 'Luan Lazzari',
      photo: 'https://avatars2.githubusercontent.com/u/23390758?v=4',
      login: 'luanlazz',
      repos: 10,
      following: 2,
      followers: 2
    }}
  />
))
