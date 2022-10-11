export const getArraysDiff = <Type extends unknown = unknown>(
    arr1: Type[],
    arr2: Type[]
): Type[] => arr1.filter(el => !arr2.includes(el))