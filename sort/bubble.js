'use strict'

/**
 * 冒泡排序
 */
function bubble(arr) {
    // 排序次数
    for (let i = 1; i < arr.length - 1; i++) {
        
        for (let j = 0; j < arr.length - i; j++) {
            
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }

    }
}

function bubble2(arr) {
    // 排序次数
    for (let i = 1; i < arr.length - 1; i++) {
        var bool = 0        
        for (let j = bool; j < arr.length - i; j++) {
            
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            } else {
                bool = j
            }
        }

    }
}

module.exports = {
    bubble,
    bubble2
}