'use strict'

import mainReduce from '../reduce-recursive/main-reduce-recursive'
import reverse from '../reverse-recursive/reverse-recursive'

const reduceRigth = (arr, ...params) => mainReduce(reverse(arr), ...params)

export default reduceRigth