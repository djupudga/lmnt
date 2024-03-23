import {reduce} from '../../src'

describe('#reduce', () => {
	it('reduces an array', () => {
		const arr = [1,2,3,4]
		const results = reduce(arr, 0, (prev, current) => prev + current)
		expect(results).toEqual(10)
	})
})