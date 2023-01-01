import {createTag, text, TagFn, TextFn, LMNode, Children} from './tag'
import htmlTags from 'html-tags'

interface Attrs {
	[key: string]: any
}
interface ComponentFn<T> {
	(attrs: T, children?: Children): LMNode
}

// Usage:
// import {someComponent} from 'foo/bar'
// const SomeComponent = component(someComponent) // lifecycle management
const component = <T extends Attrs>(fn: ComponentFn<T>) => {
	// TODO: Memoize
	return function(attrs: T, children?: Children): LMNode {
		// Set context (next)
		const rendered = fn(attrs, children)
		// somehow register where in tree this node is
		// Set context (restore)
		return rendered
	}
}

type HtmlTags = {
	[key in htmlTags.htmlTags]: TagFn
}

interface ILM extends HtmlTags {
	component<T extends Attrs>(fn: ComponentFn<T>): (attrs: T, children?: Children) => LMNode
	text: TextFn
}

let tagFns: Partial<HtmlTags> = {}
// Each call to LM.sometag should be memoized
htmlTags.forEach(item => tagFns[item] = createTag(item))

export const LM: ILM = {component, text, ...tagFns as HtmlTags}

