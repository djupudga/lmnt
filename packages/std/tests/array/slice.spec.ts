import {slice} from '../../src'

describe('#slice', () => {
	it('slices a portion of an array into a new array', () => {
		const arr = [1,2,3]
		const results = slice(arr, 1, 2)
		expect(results).not.toEqual(arr)
		expect(results).toEqual([2])
	})
	it('slices from starting point to end of array', () => {
		const arr = [1,2,3]
		const results = slice(arr, 1)
		expect(results).not.toEqual(arr)
		expect(results).toEqual([2,3])
	})
})