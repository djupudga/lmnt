import {map} from '../../src'

describe('#map', () => {
	it('maps values of an array', () => {
		const arr = [1,2,3,4]
		const expected = [2,3,4,5]
		const results = map(arr, item => ++item)
		expect(results).toEqual(expected)
	})
})