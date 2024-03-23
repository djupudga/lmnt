interface Callback<T> {
	(item: T, index?: number): void
}

/**
 * Performs the specified action for each element in an array.
 * @param array Target array.
 * @param callbackfn  A function that accepts up to three arguments.
 * forEach calls the callbackfn function one time for each element in the array.
 */
export const forEach = <T>(array: T[], fn: Callback<T>) => array.forEach(fn)