'use strict'

import mainReduce from '../reduce/main-reduce'
import reverse from '../reverse/reverse'

const reduceRigth = (arr, ...params) => mainReduce(reverse(arr), ...params)

export default reduceRigth