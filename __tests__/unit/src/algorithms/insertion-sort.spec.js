import chai from 'chai';
import insertionSort from 'src/algorithms/sorting/insertion-sort';


const { expect } = chai;

describe('Insertion Sort', () => {
  it('should return empty array', () => {
    expect(insertionSort([])).to.deep.equal([]);
  });

  it('should return the passed array', () => {
    expect(insertionSort([1])).to.deep.equal([1]);
    expect(insertionSort([2])).to.deep.equal([2]);
    expect(insertionSort([5])).to.deep.equal([5]);
    expect(insertionSort([356])).to.deep.equal([356]);
  });

  it('should sort a random array', () => {
    const array = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];
    const sortedArray = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];

    expect(insertionSort(array)).to.deep.equal(sortedArray);
  });

  it('should sort a reversed sorted array', () => {
    const reversedArray = [12, 10, 8, 7, 6, 5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

    expect(insertionSort(reversedArray)).to.deep.equal(sortedArray);
  });
});
