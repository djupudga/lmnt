type Attrs = {[key: string]: string | EventListener}
export type LMNode = LMElementNode | LMTextNode
export type Children = Array<LMNode>

export interface LMTextNode {
	text: string
	element: Text
}
export interface LMElementNode {
	tag: string
	attrs: {[key: string]: string | EventListener}
	children?: Children | undefined
	element: HTMLElement
}

type Attr = [string, string | EventListener]
const isEventListener = (entry: Attr): boolean => entry[0].startsWith('on')
const isAttribute = (entry: Attr): boolean => !isEventListener(entry)
type EventAttr = [string, EventListener]
const transformEvent = (entry: Attr): EventAttr => [
	entry[0].slice(2),
	entry[1] as unknown as EventListener,
]
const addListener = (element: HTMLElement) => (entry: EventAttr) =>
	element.addEventListener(entry[0], entry[1])
const addAttribute = (element: HTMLElement) => (entry: Attr) =>
	element.setAttribute(entry[0], entry[1] as string)

const tag = (
	tag: string,
	attrs: Attrs,
	children?: Children
): LMElementNode => {
	const element = document.createElement(tag)

	Object.entries(attrs)
		.filter(isEventListener)
		.map(transformEvent)
		.forEach(addListener(element))

	Object.entries(attrs).filter(isAttribute).forEach(addAttribute(element))

	return {
		tag,
		attrs,
		children,
		element,
	}
}

export const text = (text: string): LMTextNode => {
	const element = document.createTextNode(text)
	return {text, element}
}

export interface TagFn {
	(attrs: Attrs, children?: Children): LMNode
}

export interface TextFn {
	(text: string): LMTextNode
}

interface CreateTagFn {
	(tagName: string): TagFn
}

export const createTag: CreateTagFn = (tagName: string): TagFn => {
	return function (attrs: Attrs, children?: Children): LMNode {
		return tag(tagName, attrs, children)
	}
}
