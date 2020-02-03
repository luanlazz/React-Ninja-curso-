'use strict'

const mainReduce = (arr, func, initialValue) => {
    let acc = initialValue === undefined ? 0 : initialValue

    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i], i, arr)
    }

    return acc
}

export default mainReduce