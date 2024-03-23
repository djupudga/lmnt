import {join} from '../../src'

describe('#join', () => {
	it('joins array elements to string value', () => {
		const arr = [1,2,3,4]
		const results = join(arr, '-')
		expect(results).toEqual('1-2-3-4')
	})
})