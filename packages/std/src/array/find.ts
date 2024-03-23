interface Callback<T> {
	(item: T, index?: number): void
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 * @param array Target array.
 * @param predicate find calls predicate once for each element of the array, in ascending
 * order, until it finds one where predicate returns true. If such an element is found, find
 * immediately returns that element value. Otherwise, find returns undefined.
 */
export const find = <T>(array: T[], predicate: Callback<T>) =>
	array.find(predicate)
