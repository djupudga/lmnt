import {forEach} from '../../src'

describe('#foreach', () => {
	it('iterates over an array', () => {
		const arr = [1,2,4,5]
		let sum = 0
		forEach(arr, (item) => {
			sum += item!
		})
		expect(sum).toEqual(12)
	})
})