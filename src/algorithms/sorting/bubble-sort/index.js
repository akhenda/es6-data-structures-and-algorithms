/**
 * bubble sort implementation
 * @param  {array} array  an unsorted array
 * @return {array}       sorted array
 */
const bubbleSort = (array) => {
  array.forEach((item, index) => {
    for (let i = 0; i < (array.length - index - 1); i++) {
      // we can either start at the beggining or finish of the arrays
      // starting at the beggining, we compare the first two numbers
      // together
      if (array[i] > array[i + 1]) {
        // after comparing them, if the number on the right is found
        // to be smaller, the numbers will be swapped
        const smaller = array[i + 1];
        array[i + 1] = array[i];
        array[i] = smaller;
      }
      // after the comparison is finished, the scales (our comparator,
      // comparing two numbers at a time), move one position to the
      // right i.e. we advance to the next index and the numbers are
      // compared once again and this operation is repeated until the
      // scales reach the end of the sequence/array
    }

    // The same above operations are repeated until all the numbers
    // are fully sorted as evidenced by the use of our forEach
    // array helper here.
  });

  // return the array as it is sorted by now
  return array;
};

export default bubbleSort;
