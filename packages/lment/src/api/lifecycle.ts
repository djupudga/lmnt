import type {LMNode} from './tag'
import type {Subscription} from 'rxjs'

interface Tree {
	mount: HTMLElement
	root: LMNode
}


export const start = (tree: Tree) {
}

export const signal = () => {
	// Get current
	//   Fail if component is pure
	// Set subscriber in ImpureComponent
	// Return the stuff
	// return getter, setter
}

export const sideEffect = (effect, signals) => {
	// Get current
	//   Fail if component is pure
	// Run effect
	//   Subscribe to signals
}

export const cleanUp = (cleanup) => {
	// Get current
	//   Fail if component is pure
	// Subscribe to component death
	//   Execute cleanup on component death
}

interface ImpureComponent {
	node: LMNode
	subscriptions: Subscription[]
}

