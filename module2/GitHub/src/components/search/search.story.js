'use strict'

import { storiesOf, module, action } from '@kadira/storybook'
import React from 'react'
import Search from './index'

const search = storiesOf('Search', module)

search.add('disabled', () => (
  <Search isDisabled />
))

search.add('active', () => (
  <Search isDisabled={false} />
))

search.add('Actions component', () => (
  <Search
    isDisabled={false}
    handleSearch={action('get result')}
  />
))
