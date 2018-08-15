import chai from 'chai';
import factorial, { recursiveFactorial } from 'src/algorithms/math/factorial';


const { expect } = chai;

describe('Factorial', () => {
  describe('using iteration', () => {
    it('should compute factorial', () => {
      expect(factorial(0)).to.be.equal(1);
      expect(factorial(1)).to.be.equal(1);
      expect(factorial(3)).to.be.equal(6);
      expect(factorial(7)).to.be.equal(5040);
      expect(factorial(9)).to.be.equal(362880);
      expect(factorial(10)).to.be.equal(3628800);
    });
  });

  describe('using recursion', () => {
    it('should compute factorial', () => {
      expect(recursiveFactorial(0)).to.be.equal(1);
      expect(recursiveFactorial(1)).to.be.equal(1);
      expect(recursiveFactorial(3)).to.be.equal(6);
      expect(recursiveFactorial(7)).to.be.equal(5040);
      expect(recursiveFactorial(9)).to.be.equal(362880);
      expect(recursiveFactorial(10)).to.be.equal(3628800);
    });
  });
});
