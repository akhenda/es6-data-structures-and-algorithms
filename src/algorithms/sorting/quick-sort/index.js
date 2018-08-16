/**
 * simple quick sort implementation (pivot is the first element of the array)
 * @param  {array} array  an unsorted array
 * @return {array}       sorted array
 */
export const simpleQuickSort = (array) => {
  // one characteristics of quicksort is that it involves fewer
  // comparisons and swaps than other algorithms, so it's able
  // to sort quickly in many cases

  // let's start. the first operation targets the entire
  // array/sequence of numbers.

  // if array has less than or equal to one elements
  // then it is already sorted.
  if (array.length < 2) return array;

  // initialize left and right arrays
  const left = [];
  const right = [];

  // a number is chosen as a reference for sorting
  // this number is called the "pivot"
  // the pivot is normally a number chosen at random but, this time,
  // for convinience, the leftmost number will be chosen as the pivot
  // take the first element of the array as the pivot
  const pivot = array.shift();

  array.forEach((number, index) => {
    if (array[index] < pivot) {
      left.push(array[index]);
    } else {
      right.push(array[index]);
    }
  });

  // return [...simpleQuickSort(left), pivot, ...simpleQuickSort(right)];
  return simpleQuickSort(left).concat(pivot, simpleQuickSort(right));
};

/**
 * swap helper function
 * @param  {array} array
 * @param  {number} i
 * @param  {number} j
 * @return {void}
 */
const swap = (array, i, j) => {
  const temp = array[i];

  array[i] = array[j];
  array[j] = temp;
};

/**
 * lomuto partition scheme, it is less efficient than the Hoare partition scheme
 * @param  {array} array array to partion
 * @param  {number} left  leftmost index
 * @param  {number} right rightmost index
 * @return {number}       the pivot element
 */
export const partitionLomuto = (array, left, right) => {
  let i = left;
  let j = left;
  const pivot = right;

  for (j; j < right; j++) {
    if (array[j] <= array[pivot]) {
      swap(array, i, j);
      i += 1;
    }
  }

  swap(array, i, j);

  return i;
};

/**
 * hoare partition scheme, it is more efficient than the
 * lomuto partition scheme because it does three times
 * fewer swaps on average
 * @param  {array} array array to partion
 * @param  {number} left  leftmost index
 * @param  {number} right rightmost index
 * @return {number}       the pivot element
 */
export const partitionHoare = (array, left, right) => {
  const pivot = Math.floor((left + right) / 2);

  while (left <= right) {
    while (array[left] < array[pivot]) left++;

    while (array[right] > array[pivot]) right--;

    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }

  return left;
};

/**
 * classic implementation (with hoare or lomuto partition scheme)
 * @param  {array} array array to be sorted
 * @param  {number} left  leftmost index
 * @param  {number} right rightmost index
 * @return {array}       sorted array
 */
const quickSort = (array, left = 0, right = array.length - 1) => {
  const pivot = partitionHoare(array, left, right);

  if (left < pivot - 1) quickSort(array, left, pivot - 1);

  if (right > pivot) quickSort(array, pivot, right);

  return array;
};

export default quickSort;
