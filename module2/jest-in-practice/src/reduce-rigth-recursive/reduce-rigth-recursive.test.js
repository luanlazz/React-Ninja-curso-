'use strict'

import { expect } from 'chai'
import reduce from './reduce-rigth-recursive'

it('reduce(["an", "Lu"], (acc, item) => acc + item, "") should return Luan', () => {
    expect(reduce(["an", "Lu"], (acc, item) => acc + item, '')).to.be.equal("Luan")
})
