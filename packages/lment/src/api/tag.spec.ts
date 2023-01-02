import {createTag, LMElementNode, text} from './tag'

describe('tag.ts', () => {
	describe('#text', () => {
		it('creates a text node from a string', () => {
			const node = text('foo')
			expect(node.text).toBe('foo')
			expect(node.element).toBeInstanceOf(Text)
		})
	})

	describe('#createTag', () => {
		it('returns a function for creating tags', () => {
			const res = createTag('div')
			expect(res).toBeInstanceOf(Function)
		})
		describe('#inner', () => {
			it('creates a tag node', () => {
				const inner = createTag('span')
				const node = inner({}, []) as LMElementNode
				expect(node.element).toBeInstanceOf(HTMLElement)
				expect(node.tag).toBe('span')
				expect(node.children?.length).toEqual(0)
				expect(Object.entries(node.attrs).length).toEqual(0)
			})
			it('adds attributes to element', () => {
				const inner = createTag('span')
				const node = inner({id: 'foo'}, []) as LMElementNode
				expect(node.element['id']).toEqual('foo')
			})
			it('adds an event listener to an element', (done) => {
				const inner = createTag('span')
				const handler = () => {
					done()
				}
				const node = inner({onclick: handler}, []) as LMElementNode
				node.element.dispatchEvent(new Event('click'))
			})
			it('generates child nodes', () => {
				const inner = createTag('div')
				const node = inner({}, [text('foo')]) as LMElementNode
				expect(node.children?.length).toEqual(1)
				expect(node.children![0]?.element).toBeInstanceOf(Text)
			})
		})
	})
})