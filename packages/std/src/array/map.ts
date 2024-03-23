interface Callback<T, U> {
	(item: T, index?: number): U
}

/**
 * Calls a defined callback function on each element of an array, and
 * returns an array that contains the results.
 * @param array Target array.
 * @param callbackfn A function that accepts up to three arguments.
 * The map method calls the callbackfn function one time for each
 * element in the array.
 */
export const map = <T, U>(array: T[], fn: Callback<T, U>): U[] => array.map(fn)