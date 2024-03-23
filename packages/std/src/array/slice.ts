/**
 * Returns a section of an array.
 * @param array Target array
 * @param start The beginning of the specified portion of the array.
 * @param end The end of the specified portion of the array.
 * This is exclusive of the element at the index 'end'.
 */
export const slice = <T>(array: T[], start?: number, end?: number) =>
	array.slice(start, end)
