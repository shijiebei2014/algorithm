'use strict'

/**
 * 桶排序
 */
function bucket(arr, num = 3) {
    let result = []
    const buckets = new Array(num)

    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i]
        const index = Math.floor(ele / num)
    
        if (!buckets[index]) {
            buckets[index] = [ele]
        } else {
            // 插入排序
            let size = buckets[index].length 
            if (ele > buckets[index][size - 1]) {
                buckets[index].push(ele)
            } else {
                for (let j = size - 2; j >= 0 ; j--) {
                    if (ele < buckets[index][j] ) {
                        buckets[index].splice(j, 0, ele)
                        break
                    }
                }
            }
        }
    }

    for (let i = 0; i < buckets.length; i++) {
        const buck = buckets[i]
        result = result.concat(buck)
    }

    return result
}

module.exports = bucket