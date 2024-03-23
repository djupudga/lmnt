interface Callback<Type> {
	(item: Type, index?: number): void
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param array Target array.
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 */
export const filter = <T>(array: T[], fn: Callback<T>): T[] => array.filter(fn)