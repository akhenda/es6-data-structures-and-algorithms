import chai from 'chai';
import quickSort, { simpleQuickSort, partitionLomuto } from 'src/algorithms/sorting/quick-sort';


const { expect } = chai;

describe('Quick Sort', () => {
  describe('partitionLomuto helper function', () => {
    it('should partion an array and return the pivot element', () => {
      const array = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];

      expect(partitionLomuto(array, 0, 9)).to.equal(9);
    });
  });

  describe('classic quick sort using Hoare partitioning', () => {
    it('should return empty array', () => {
      expect(quickSort([])).to.deep.equal([]);
    });

    it('should return the passed array', () => {
      expect(quickSort([1])).to.deep.equal([1]);
      expect(quickSort([2])).to.deep.equal([2]);
      expect(quickSort([5])).to.deep.equal([5]);
      expect(quickSort([356])).to.deep.equal([356]);
    });

    it('should sort a random array', () => {
      const array = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];
      const sortedArray = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];

      expect(quickSort(array)).to.deep.equal(sortedArray);
    });

    it('should sort a reversed sorted array', () => {
      const reversedArray = [12, 10, 8, 7, 6, 5, 4, 3, 2, 1];
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

      expect(quickSort(reversedArray)).to.deep.equal(sortedArray);
    });
  });

  describe('my simple version of the quick sort', () => {
    it('should return empty array', () => {
      expect(simpleQuickSort([])).to.deep.equal([]);
    });

    it('should return the passed array', () => {
      expect(simpleQuickSort([1])).to.deep.equal([1]);
      expect(simpleQuickSort([2])).to.deep.equal([2]);
      expect(simpleQuickSort([5])).to.deep.equal([5]);
      expect(simpleQuickSort([356])).to.deep.equal([356]);
    });

    it('should sort a random array', () => {
      const array = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];
      const sortedArray = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];

      expect(simpleQuickSort(array)).to.deep.equal(sortedArray);
    });

    it('should sort a reversed sorted array', () => {
      const reversedArray = [12, 10, 8, 7, 6, 5, 4, 3, 2, 1];
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

      expect(simpleQuickSort(reversedArray)).to.deep.equal(sortedArray);
    });
  });
});
