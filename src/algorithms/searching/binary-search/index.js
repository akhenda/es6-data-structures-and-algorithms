import { isArraySorted } from 'src/utils';

/**
 * Binary Search implementation using iteration
 * @param  {array} sortedArray
 * @param  {string|number} target
 * @return {number}             the index of the found element
 */
const binarySearch = (sortedArray, target) => {
  if (!isArraySorted(sortedArray)) throw new Error('The provided array is not sorted');

  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    const mid = Math.floor((end - start) / 2) + start;

    if (target < sortedArray[mid]) {
      end = mid - 1;
    } else if (target > sortedArray[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

/**
 * Binary Search implementation using recursion
 * @param  {array} sortedArray
 * @param  {string|number} target
 * @return {number}             the index of the found element
 */
export const recursiveBinarySearch = (sortedArray, target) => {
  if (!isArraySorted(sortedArray)) throw new Error('The provided array is not sorted');

  return ((function recurse(start, end) {
    let result = -1;

    if (start > end) return result;

    const mid = Math.floor((end - start) / 2) + start;

    if (target === sortedArray[mid]) {
      result = mid;
    } else if (target < sortedArray[mid]) {
      result = recurse(start, mid - 1);
    } else {
      result = recurse(mid + 1, end);
    }

    return result;
  })(0, sortedArray.length - 1));
};

export default binarySearch;
