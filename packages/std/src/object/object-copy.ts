/**
 * Creates a shallow copy of an object.
 * @param obj The object to be copied.
 * @return A shallow copy of the object.
 */
export const objectCopy = <T>(obj: T) => Object.assign({}, obj)