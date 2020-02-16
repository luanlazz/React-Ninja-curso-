'use strict'

import { storiesOf, module } from '@kadira/storybook'
import React from 'react'
import Pagination from './index'

const stories = storiesOf('Pagination', module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with total and activePage', () => (
  <Pagination total={10} activePage={5} />
))

stories.add('with page link', () => (
  <Pagination total={10} activePage={5} pageLink='http://mypage.com/%page%' />
))

stories.add('with callback', () => (
  <Pagination total={10} activePage={5} pageLink='http://mypage.com/%page%' onClick={(page) => {
    window.alert(page)
  }} />
))

