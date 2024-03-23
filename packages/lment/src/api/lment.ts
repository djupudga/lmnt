import {createTag, text, TagFn, TextFn, LMNode, Children} from './tag'
import htmlTags from 'html-tags'
import {render} from './render'

export interface Attrs {
	[key: string]: any
}

interface ComponentFn {
	(): LMNode
}
interface ComponentAttrFn<T> {
	(attrs: T): LMNode
}
interface ComponentAttrChildFn<T> {
	(attrs: T, children: Children): LMNode
}

// Usage:
// export const MyComponent = LM.component(() => {
// 	LM.text('foobar')
// })
// or
// import {myComponent} from './my-component'
// const MyComponent = LM.component(myComponent)
function component(fn: ComponentFn): ComponentFn
function component<T>(fn: ComponentAttrFn<T>): ComponentAttrFn<T>
function component<T>(fn: ComponentAttrChildFn<T>): ComponentAttrChildFn<T>
function component(fn: Function): Function {
	return function(attrs: Attrs = {}, children: Children = []): LMNode {
		// Set context (next)
		const rendered = fn(attrs, children)
		// somehow register where in tree this node is
		// Set context (restore)
		return rendered
	}
}
function impure(fn: ComponentFn): ComponentFn
function impure<T>(fn: ComponentAttrFn<T>): ComponentAttrFn<T>
function impure<T>(fn: ComponentAttrChildFn<T>): ComponentAttrChildFn<T>
function impure(fn: Function): Function {
	return function(attrs: Attrs = {}, children: Children = []): LMNode {
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
	component(fn: ComponentFn): ComponentFn
	component<T>(fn: ComponentAttrFn<T>): ComponentAttrFn<T>
	component<T>(fn: ComponentAttrChildFn<T>): ComponentAttrChildFn<T>
	impure(fn: ComponentFn): ComponentFn
	impure<T>(fn: ComponentAttrFn<T>): ComponentAttrFn<T>
	impure<T>(fn: ComponentAttrChildFn<T>): ComponentAttrChildFn<T>
	render(mount: HTMLElement|null, root: LMNode): void
	text: TextFn
}

let tagFns: Partial<HtmlTags> = {}
// Each call to LM.sometag should be memoized?? Or not..
htmlTags.forEach(item => tagFns[item] = createTag(item))

export const LM: ILM = {render, component, impure, text, ...tagFns as HtmlTags}

