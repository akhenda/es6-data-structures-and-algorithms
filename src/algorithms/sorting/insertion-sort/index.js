/**
 * insertion sort implementation
 * @param  {array} array  an unsorted array
 * @return {array}       sorted array
 */
const insertionSort = (array) => {
  array.forEach((number, index) => {
    // to begin, this algorithm considers the leftmost number fully sorted
    let previousIndex = index - 1;
    const temp = array[index];

    // next, from the remaining numbers the leftmost number is taken out
    // and compared to the already sorted number to its left
    while (previousIndex >= 0 && array[previousIndex] > temp) {
      // if the already sorted number is larger, the two numbers swap
      array[previousIndex + 1] = array[previousIndex];
      previousIndex--;
    }

    // the above operation repeats until either a number smaller
    // appears, or the number reaches the left edge

    array[previousIndex + 1] = temp;
  });

  return array;
};

export default insertionSort;
