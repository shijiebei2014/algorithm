'use strict'

const expect = require('chai').expect

const bubble = require('../sort/bubble').bubble
const bubble2 = require('../sort/bubble').bubble2
const insert = require('../sort/insert')
const quick = require('../sort/quick')
const merge = require('../sort/merge')
const heap = require('../sort/heap')
const select = require('../sort/select')
const bucket = require('../sort/bucket')

const arr = [9,8,7,6,5,4,3,2,1,0]
const result = arr.reverse()

describe('排序', function() {
    
    it('冒泡1', function() {
        bubble(arr)
        expect(arr).to.deep.equal(result)
    })

    it('冒泡2', function() {
        bubble2(arr)
        expect(arr).to.deep.equal(result)
    })

    it('插入', function() {
        insert(arr)
        expect(arr).to.deep.equal(result)
    })

    it('快速', function() {
        const newArr = quick(arr)
        expect(newArr).to.deep.equal(result)
    })

    it('归并', function() {
        const newArr = merge(arr)
        expect(newArr).to.deep.equal(result)
    })

    it('堆', function() {
        heap(arr)
        expect(arr).to.deep.equal(result)
    })

    it('选择', function() {
        const newArr = select(arr)
        expect(newArr).to.deep.equal(result)
    })

    it('桶', function() {
        const newArr = bucket(arr)
        expect(newArr).to.deep.equal(result)
    })
})