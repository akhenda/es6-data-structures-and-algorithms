// our intervals
const GAPS = [500, 240, 128, 54, 26, 9, 4, 1];

/**
 * shell sort implementation
 *
 * can be seen as either a generalization of sorting
 * by exchange (bubble sort) or sorting by insertion (insertion sort)
 * the method starts by sorting pairs of elements far apart from each
 * other, then progressively reducing the gap between elements to be compared
 * 
 * @param  {array} array
 * @return {array}       sorted array
 */
const shellSort = (array) => {
  GAPS.forEach((gap) => {
    for (let index = gap; index < array.length; index++) {
      let j = index;
      const temp = array[index];

      for (j; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }

      array[j] = temp;
    }
  });

  return array;
};

export default shellSort;
