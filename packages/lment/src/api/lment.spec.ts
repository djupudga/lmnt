import htmlTags from 'html-tags'
import {LM} from './lment'
import type {LMElementNode, LMTextNode} from './tag'

describe('lment.ts', () => {
	describe('LM.<tag>', () =>{
		it('provides HTML tag functions', () => {
			const tagName = htmlTags[Math.floor(Math.random() * htmlTags.length)]!
			const tag = LM[tagName]({}, []) as LMElementNode
			expect(tag.tag).toBe(tagName)
		})
	})
	describe('LM.text', () => {
		it('creates a text node from a string', () => {
			const node = LM.text('hello') as LMTextNode
			expect(node.text).toBe('hello')
		})
	})
	describe('LM.component', () => {
		it('wraps an LM component function in a lifecycle wrapper', () => {
			const wrapper = LM.component(() => LM.text('hello'))
			expect(wrapper).toBeInstanceOf(Function)
		})
		describe('LM.component#inner', () => {
			it('renders nodes', () => {
				const inner = LM.component(() => LM.text('hello'))
				const node = inner() as LMTextNode
				expect(node.text).toBe('hello')
				expect(node.element).toBeInstanceOf(Text)
			})
		})
	})
})