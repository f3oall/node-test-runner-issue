import {describe, it} from 'node:test'
import {expect} from 'chai'

describe('Group', () => {
    it('should show diff if fails', () => {
        try {
            expect({number: {type: Number}}).to.deep.equal({number: {type: Number, required: true}}) 
        } catch (e) {
            console.log('Actual Error', e) // AssertionError from chai has `actual`, `expected` and `showDiff` properties
            throw e // but in test reporter, these properties are missing
        }
    })
    it('shows diff if fails', () => {
        expect({number: {type: 1}}).to.deep.equal({number: {type: 2, required: true}}) // works fine, when no function type is present
    })
})