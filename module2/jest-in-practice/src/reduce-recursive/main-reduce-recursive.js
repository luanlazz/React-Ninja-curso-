'use strict'

const mainReduce = (arr, func, initialValue) => {
    const acc = initialValue === undefined ? 0 : initialValue

    return (function reduceInternal(accInternal, arrayInternal, counter) {
        const [head, ...tail] = arrayInternal

        return (arrayInternal.length === 0
            ? accInternal
            : reduceInternal(func(accInternal, head, counter, arr), tail, counter + 1))
    })(acc, arr, 0)
}

export default mainReduce