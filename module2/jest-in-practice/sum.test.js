'use strict'

import { expect } from 'chai'
import sum from './sum'

it('sum shoud be a function', () => {
    expect(sum).to.be.a('function')
})

it('sum(1,2) should return 3', () => {
    expect(sum(1,2)).to.be.equal(3)
})

// describe('# Escopo', () => {
//     it('Testando Jest', () => {
    
//     })

//     it('Testando Jest 2', () => {
        
//     })
// })

// it('Um é igual a 1', () => {
//     console.assert(1 === 1, '1 é igual a 1')
// })

// it('Um é igual a 1', () => {
//     expect(1).toBe(1)
// })
