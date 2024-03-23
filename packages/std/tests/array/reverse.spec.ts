import {reverse} from '../../src'

describe('#reverse', () => {
	it('reverses contents of array using copy-on-write', () => {
		const arr = [1,2,3,4]
		const results = reverse(arr)
		expect(results).toEqual([4,3,2,1])
		expect(results).not.toEqual(arr)
	})
})