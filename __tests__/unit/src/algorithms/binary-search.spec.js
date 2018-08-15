import chai from 'chai';
import binarySearch, { recursiveBinarySearch } from 'src/algorithms/searching/binary-search';


const { expect } = chai;

describe('Binary Search', () => {
  describe('using iteration', () => {
    it('should throw an error if given an unsorted array', () => {
      function unsortedArraySearch() {
        const array = [0, 1, 2, 3, 4, 5, 8, 6];

        binarySearch(array, 4);
      }

      expect(unsortedArraySearch).to.throw(/not sorted/);
    });

    it('should return the correct index of a search item', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 10, 26, 35, 45, 50];

      expect(binarySearch(array, 0)).to.be.equal(0);
      expect(binarySearch(array, 2)).to.be.equal(2);
      expect(binarySearch(array, 4)).to.be.equal(4);
      expect(binarySearch(array, 5)).to.be.equal(5);
      expect(binarySearch(array, 10)).to.be.equal(7);
      expect(binarySearch(array, 35)).to.be.equal(9);
    });

    it('should return -1 for an item not found in the array', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 10, 26, 35, 45, 50];

      expect(binarySearch(array, 17)).to.be.equal(-1);
      expect(binarySearch(array, 73)).to.be.equal(-1);
    });
  });

  describe('using recursion', () => {
    it('should throw an error if given an unsorted array', () => {
      function unsortedArraySearch() {
        const array = [0, 1, 2, 3, 4, 5, 8, 6];

        binarySearch(array, 4);
      }

      expect(unsortedArraySearch).to.throw(/not sorted/);
    });

    it('should return the correct index of a search item', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 10, 26, 35, 45, 50];

      expect(recursiveBinarySearch(array, 0)).to.be.equal(0);
      expect(recursiveBinarySearch(array, 2)).to.be.equal(2);
      expect(recursiveBinarySearch(array, 4)).to.be.equal(4);
      expect(recursiveBinarySearch(array, 5)).to.be.equal(5);
      expect(recursiveBinarySearch(array, 10)).to.be.equal(7);
      expect(recursiveBinarySearch(array, 35)).to.be.equal(9);
    });

    it('should return -1 for an item not found in the array', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 10, 26, 35, 45, 50];

      expect(recursiveBinarySearch(array, 17)).to.be.equal(-1);
      expect(recursiveBinarySearch(array, 73)).to.be.equal(-1);
    });
  });
});
