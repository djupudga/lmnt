import {objectCopy} from '../../src'

describe('#objectCopy', () => {
	it('creates a shallow copy of an object', () => {
		const obj = {a: 1}
		const results = objectCopy(obj)
		results.a = 33
		expect(results.a).not.toEqual(obj.a)
	})
})