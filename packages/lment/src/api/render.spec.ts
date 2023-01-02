import {LM} from './lment'

describe('render.ts', () => {
	describe('#render', () => {
		it('renders a text component onto a DOM element', () => {
			const root = document.createElement('div')
			const Component = LM.component(() => LM.text('foo'))
			LM.render(root, Component())
			expect(root.innerHTML).toEqual('foo')
		})
		it('renders a component tree into a DOM element', () =>{
			const root = document.createElement('div')
			const Component = LM.component(() => {
				return LM.div({id: '1'}, [
					LM.div({id: '2'}, [
						LM.text('hello')
					])
				])
			})
			LM.render(root, Component())
			expect(root.children.length).toEqual(1)
			expect(root.children[0]!.id).toBe('1')
			expect(root.children[0]!.children[0]?.id).toBe('2')
			expect(root.children[0]!.children[0]?.innerHTML).toBe('hello')
		})
		it('throws an error if mount element is null', () => {
			const root = null as unknown as HTMLElement
			expect(() => {
				LM.render(root, LM.text('hello'))
			}).toThrow('mount element not defined')
		})
	})
})