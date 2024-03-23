import {arrayCopy} from './array-copy'

/**
 * Reverses an array using copy-on-write.
 * @param array Array to be reversed.
 * @return Reversed array
 */
export const reverse = <T>(array: T[]): T[] => arrayCopy(array).reverse()