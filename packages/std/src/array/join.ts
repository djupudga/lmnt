/**
 * Adds all the elements of an array separated by the specified
 * separator string.
 * @param array Target array.
 * @param separator A string used to separate one element of an
 * array from the next in the resulting String. If omitted, the
 * array elements are separated with a comma.
 */
export const join = <T>(array: T[], separator?: string) =>
	array.join(separator)
