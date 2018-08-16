/**
 * utility function that merges and sorts two arrays
 * @param  {array} left
 * @param  {array} right
 * @return {array}       the merged sorted array
 */
export const merge = (left, right) => {
  const results = [];

  // when being combined, each group's numbers are arranged so that
  // they are ordered from smallest to largest after combination
  // when groups with multiple numbers are combined, the first
  // numbers are compared
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
};

/**
 * merge sort implementation
 * @param  {array} array  an unsorted array
 * @return {array}       sorted array
 */
const mergeSort = (array) => {
  if (array.length <= 1) return array;

  // first, the sequence/array is divided further and further into halves
  // in our algorithm, the divisions are done via recursion i.e. calling
  // this function over and over again until the divisions are complete
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // next, the divided groups are combined using our helper merge function
  // also, the combining of groups is repeated recursively until all numbers
  // form one group
  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
