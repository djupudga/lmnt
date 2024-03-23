import type {LMNode} from './tag'

export const render = (mount: HTMLElement, root: LMNode) => {
	if (mount == null) {
		throw new Error('mount element not defined')
	}
	// Traverse the tree
	const rootElement = root.element
	if ('children' in root) {
		root.children?.forEach(child => {
			render(rootElement as HTMLElement, child)
		})
	}
	mount.appendChild(rootElement)
	// Register root in lifecycle manager thing
	//   Lifecycle manager thing will fire a lifecycle event (mounted)
	//   on all nodes
}