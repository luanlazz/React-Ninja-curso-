'use strict'

import { storiesOf, module, action } from '@kadira/storybook'
import React from 'react'
import Actions from './index'

const stories = storiesOf('Actions', module)

stories.add('Actions component', () => (
  <Actions
    getRepos={action('get repos')}
    getStarred={action('get starred')}
  />
))
