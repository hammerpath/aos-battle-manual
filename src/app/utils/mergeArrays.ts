export default function mergeArrays<T>(...arrays: (T[] | undefined)[]): T[] {
  return arrays.reduce<T[]>((acc, currentArray) => {
    if (currentArray !== undefined) {
      acc = acc.concat(currentArray);
    }
    return acc;
  }, []);
}
