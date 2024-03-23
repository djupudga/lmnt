interface Callback<T,U> {
	(previousValue: U, currentValue: T, index: number): U
}

/**
 * Returns the elements of an array that meet the condition
 * specified in a callback function.
 * @param array Target array.
 * @param predicate A function that accepts up to three arguments.
 * The filter method calls the predicate function one time for
 * each element in the array.
 */
export const reduce = <T,U>(array: T[], initialValue: U, predicate: Callback<T,U>): U => array.reduce<U>(predicate, initialValue)