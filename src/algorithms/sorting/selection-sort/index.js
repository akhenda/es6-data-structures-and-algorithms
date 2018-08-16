/**
 * selection sort implementation
 * @param  {array} array  an unsorted array
 * @return {array}       sorted array
 */
const selectionSort = (array) => {
  array.forEach((number, index) => {
    let indexOfMin = index;

    // using linear search, the smallest value's index
    // in the sequesnce is located. we can replace this
    // for loop block with the linear search algorithm
    // written elsewhere in this repo
    for (let j = index + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMin]) indexOfMin = j;
    }

    // if the smallest value happens to already be in the
    // leftmost position, no operation is carried out
    if (indexOfMin !== index) {
      const lesser = array[indexOfMin];

      // the smallest value swaps with the leftmost
      // number and is considered fully sorted
      array[indexOfMin] = array[index];
      array[index] = lesser;
    }

    // the same above operation is repeated until all
    // the numbers are fully sorted as evidence by
    // our forEach array helper
  });

  // sorting is complete
  // return the array
  return array;
};

export default selectionSort;
