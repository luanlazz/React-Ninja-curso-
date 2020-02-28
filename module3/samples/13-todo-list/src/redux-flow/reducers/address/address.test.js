'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { FETCHING, SUCCESS } from './actions'

it('address should be a function', () => {
  expect(address).to.be.a('function')
})

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: true
  })
  const action = { 
    type: SUCCESS,
    payload: {
      address: 'Servidão Betânia',
      city: 'Florianópolis',
      code: '88032-035',
      district: 'Saco Grande',
      state: 'SC',
      status: 1
    }
  }
  const after = {
    address: 'Servidão Betânia',
    city: 'Florianópolis',
    code: '88032-035',
    district: 'Saco Grande',
    state: 'SC',
    status: 1,
    isFetching: false
  }
  expect(address(before, action)).to.be.deep.equal(after)
})
