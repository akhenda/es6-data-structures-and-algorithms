import chai from 'chai';
import mergeSort, { merge } from 'src/algorithms/sorting/merge-sort';


const { expect } = chai;

describe('Merge Sort', () => {
  describe('merge helper function', () => {
    it('should merge two arrays', () => {
      const array1 = [2, 1, 4];
      const array2 = [5, 3, 6, 7];
      const mergedArray = [2, 1, 4, 5, 3, 6, 7];

      expect(merge([], [])).to.deep.equal([]);
      expect(merge([1], [])).to.deep.equal([1]);
      expect(merge([1], [2])).to.deep.equal([1, 2]);
      expect(merge(array1, array2)).to.deep.equal(mergedArray);
    });
  });

  describe('sorting operation', () => {
    it('should return empty array', () => {
      expect(mergeSort([])).to.deep.equal([]);
    });

    it('should return the passed array', () => {
      expect(mergeSort([1])).to.deep.equal([1]);
      expect(mergeSort([2])).to.deep.equal([2]);
      expect(mergeSort([5])).to.deep.equal([5]);
      expect(mergeSort([356])).to.deep.equal([356]);
    });

    it('should sort a random array', () => {
      const array = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];
      const sortedArray = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];

      expect(mergeSort(array)).to.deep.equal(sortedArray);
    });

    it('should sort a reversed sorted array', () => {
      const reversedArray = [12, 10, 8, 7, 6, 5, 4, 3, 2, 1];
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

      expect(mergeSort(reversedArray)).to.deep.equal(sortedArray);
    });
  });
});
