import {LM} from 'lment'

interface AnotherAttrs {
	message: string
}
function another({message}: AnotherAttrs) {
	return LM.text(message)
}
const Another = LM.component(another)
function onclick() {
	alert('Hello world again!!')
}

// Function call is memoized to speed up tree rendering
// further optimizations are possible by making sure only
// affected DOM nodes are rendered in browser.
// function test() {
	// sideEffect(() => {
	//   // Triggers a rerender of this
	//   // component due to state changes in a or b
	//   return () => { /* cleanup */}
	// }, [a, b])


	// const list = [1, 2, 3]
// 	return LM.div({id: 'foo'}, [
// 		LM.ul({id: 'bar', onclick}, [
// 			LM.li({id: 'hej'}, [
// 				LM.text("Hello"),
// 				Another({message: ' World'})
// 			])
// 		])
// 	])
// }

const Test = LM.component(() => {
	return LM.div({id: 'foo'}, [
		LM.ul({id: 'bar', onclick}, [
			LM.li({id: 'hej'}, [
				LM.text("Hello"),
				Another({message: ' World'})
			])
		])
	])
})

LM.render(document.getElementById('app'), Test())