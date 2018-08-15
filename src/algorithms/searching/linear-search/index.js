/**
 * Linear Search implementation
 * @param  {array} array
 * @param  {string|number} target
 * @return {number}        the index of the found element
 */
const linearSearch = (array, target) => {
  let result = -1;

  array.forEach((item, index) => {
    if (target === item) result = index;
  });

  return result;
};

export default linearSearch;
