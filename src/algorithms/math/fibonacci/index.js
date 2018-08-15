/**
 * fibonacci implementation
 * @param  {number} number
 * @return {number}
 */
const fibonacci = (number) => {
  if (number === 0 || number === 1) return number;

  return fibonacci(number - 1) + fibonacci(number - 2);
};

/**
 * fibonacci implementation using Dynamic Programming
 * @param  {number} number
 * @return {number}
 */
export const fibonacciDP = (number) => {
  const cache = {
    0: 0,
    1: 1,
  };

  function recurse(num) {
    if (cache[num] === undefined) {
      cache[num] = recurse(num - 1) + recurse(num - 2);
    }

    return cache[num];
  }

  return recurse(number);
};

export default fibonacci;
