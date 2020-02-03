'use strict'

import { expect } from 'chai'
import reverse from './reverse'

it('reserve should be a function', () => {
    expect(reverse).to.be.a('function')
})

it('reserve([1]) should be return [1]', () => {
    expect(reverse([1])).to.be.deep.equal([1])
})

it('reserve([1, 2]) should be return [2, 1]', () => {
    expect(reverse([1, 2])).to.be.deep.equal([2, 1])
})

it('reserve(["luan", "Jorge", "Joao"]) should be return ["Joao", "Jorge", "luan"]', () => {
    expect(reverse(["luan", "Jorge", "Joao"])).to.be.deep.equal(["Joao", "Jorge", "luan"])
})