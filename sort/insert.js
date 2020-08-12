'use strict'

/**
 * 插入排序 
 */
function insert(arr) {
    for (let i = 1; i < arr.length; i++) {

        let tmp = arr[i]        
        for (let j = i - 1; j >= 0 ; j--) {
            if (arr[i] < arr[j]) {
                arr[j + 1] = arr[j]
                arr[j] = tmp
            } else {
                break
            }
        }
        
    }
}

module.exports = insert