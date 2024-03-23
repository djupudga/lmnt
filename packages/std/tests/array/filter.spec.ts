import {filter} from '../../src'

describe('#filter', () => {
	it('filters elements of an array', () => {
		const arr = [1,2,3,4]
		const results = filter(arr, item => item > 2)
		expect(results).toEqual([3,4])
	})
})