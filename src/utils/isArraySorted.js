/**
 * utility function to check if an array is sorted
 * @param  {array}  array the array to be checked
 * @return {Boolean}
 */
const isArraySorted = (array) => {
  return array.every((val, i, arr) => !i || (val >= arr[i - 1]));
};

export default isArraySorted;
