'use strict'

/**
 * 归并排序 
 */
function merge(arr) {
    const size = arr.length

    if (size > 2) {
        const mid = Math.floor(size / 2)
        const left = merge(arr.slice(0, mid))
        const right = merge(arr.slice(mid))
        const newArr = []

        while(left.length && right.length) {
            if (left[0] < right[0]) {
                newArr.push(left.shift())
            } else {
                newArr.push(right.shift())
            }
        }

        if (left.length) {
            for (let i = 0; i < left.length; i++) {
                newArr.push(left[i])
            }
        }
        
        if (right.length) {
            for (let i = 0; i < right.length; i++) {
                newArr.push(right[i])
            }
        }

        return newArr
    } else {
        if (size === 2) {
            if (arr[0] > arr[1]) {
                let tmp = arr[0]
                arr[0] = arr[1]
                arr[1] = tmp
            }
        }
        return arr
    }
}

module.exports = merge