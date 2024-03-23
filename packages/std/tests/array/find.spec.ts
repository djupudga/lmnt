import {find} from '../../src'

describe('#filter', () => {
	it('finds first match in an array', () => {
		const arr = [1,2,3,4]
		const results = find(arr, item => item == 2)
		expect(results).toEqual(2)
	})
})