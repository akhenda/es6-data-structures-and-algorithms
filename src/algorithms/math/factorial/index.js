/**
 * Factorial implementation using iteration
 * @param  {number} number
 * @return {number}
 */
const factorial = (number) => {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
};

/**
 * Factorial implementation using recursion
 * @param  {number} number
 * @return {number}
 */
export const recursiveFactorial = (number) => {
  return number > 1 ? number * recursiveFactorial(number - 1) : 1;
};

export default factorial;
