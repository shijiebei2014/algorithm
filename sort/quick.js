'use strict'

/**
 * 快速排序 
 */
function quick(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let mid = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quick(left).concat(mid, quick(right))
}

module.exports = quick