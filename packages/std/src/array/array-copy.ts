import {slice} from './slice'

/**
 * Shallow copies an array.
 * @param array Creates a shallow copy of this array.
 * @return A shallow copy of the array.
 */
export const arrayCopy = <T>(array: T[]) => slice(array)