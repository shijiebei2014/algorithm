'use strict'

/**
 * 堆排序
 */
function heap(arr) {
    let size = arr.length
    for (let i = Math.floor(size / 2) - 1; i >= 0 ; i--) {
       heapify(arr, i, size) 
    }

    for (let i = arr.length - 1; i > 0; i--) {
        let tmp = arr[i]
        arr[i] = arr[0]
        arr[0] = tmp
        heapify(arr, 0, i)
    }
}

/**
 * 大顶堆
 */
function heapify(arr, x, len) {
    let l = 2 * x + 1
    let r = 2 * x + 2
    let largest = x

    if (l < len && arr[l] > arr[largest]) {
        largest = l
    }

    if (r < len && arr[r] > arr[largest]) {
        largest = r
    }

    if (largest !== x) {
        let tmp = arr[x]
        arr[x] = arr[largest]
        arr[largest] = tmp
        heapify(arr, largest, len)
    }
}

module.exports = heap