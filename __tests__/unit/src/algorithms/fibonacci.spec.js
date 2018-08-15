import chai from 'chai';
import fibonacci, { fibonacciDP } from 'src/algorithms/math/fibonacci';


const { expect } = chai;

describe('Factorial', () => {
  describe('using recursion', () => {
    it('should compute fibonacci number at the given position', () => {
      expect(fibonacci(0)).to.be.equal(0);
      expect(fibonacci(1)).to.be.equal(1);
      expect(fibonacci(2)).to.be.equal(1);
      expect(fibonacci(3)).to.be.equal(2);
      expect(fibonacci(4)).to.be.equal(3);
      expect(fibonacci(5)).to.be.equal(5);
      expect(fibonacci(6)).to.be.equal(8);
      expect(fibonacci(7)).to.be.equal(13);
      expect(fibonacci(8)).to.be.equal(21);
      expect(fibonacci(9)).to.be.equal(34);
      expect(fibonacci(10)).to.be.equal(55);
    });
  });

  describe('using dynamic programming', () => {
    it('should compute fibonacci number at the given position', () => {
      expect(fibonacciDP(0)).to.be.equal(0);
      expect(fibonacciDP(1)).to.be.equal(1);
      expect(fibonacciDP(2)).to.be.equal(1);
      expect(fibonacciDP(3)).to.be.equal(2);
      expect(fibonacciDP(4)).to.be.equal(3);
      expect(fibonacciDP(5)).to.be.equal(5);
      expect(fibonacciDP(6)).to.be.equal(8);
      expect(fibonacciDP(7)).to.be.equal(13);
      expect(fibonacciDP(8)).to.be.equal(21);
      expect(fibonacciDP(9)).to.be.equal(34);
      expect(fibonacciDP(10)).to.be.equal(55);
    });
  });
});
