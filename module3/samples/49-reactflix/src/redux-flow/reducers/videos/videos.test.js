'use strict'

import { expect } from 'chai'
import videos from './index'

it('videos should be a function', () => {
  expect(videos).to.be.a('function')
})
