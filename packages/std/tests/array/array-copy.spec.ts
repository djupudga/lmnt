import {arrayCopy} from '../../src'

describe('#arrayCopy', () => {
	it('creates a shallow copy of an array', () => {
		const arr = [1,2,3,4]
		const results = arrayCopy(arr)
		results.pop()
		expect(results).not.toEqual(arr)
	})
})