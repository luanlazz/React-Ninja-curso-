'use strict'

import { storiesOf, module } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)
  .add('with title', () => (
    <Repos title='Favorites' />
  ))

  .add('with repos', () => (
    <Repos
      title='Favorites'
      repos={[
        {
          link: 'http://blog.da2k.com.br',
          name: 'da2k'
        }
      ]} />
  ))
