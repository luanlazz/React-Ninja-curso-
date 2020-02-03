'use strict'

const reverse = (arr) => {
    return (arr.length === 0
        ? []
        : [arr.pop()].concat(reverse(arr))
    )
}

export default reverse