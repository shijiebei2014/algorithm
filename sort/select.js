'use strict'

/**
 * 选择排序 
 */
function select(arr) {
    const newArr = []
    const result = []

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (!newArr[val]) {
            newArr[val] = 0
        }
        newArr[val]++
    }

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i]; j++) {
            result.push(i)
        }
    }
    
    return result
}

module.exports = select