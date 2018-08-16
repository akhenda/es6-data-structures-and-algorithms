import chai from 'chai';
import selectionSort from 'src/algorithms/sorting/selection-sort';


const { expect } = chai;

describe('Selection Sort', () => {
  it('should return empty array', () => {
    expect(selectionSort([])).to.deep.equal([]);
  });

  it('should return the passed array', () => {
    expect(selectionSort([1])).to.deep.equal([1]);
    expect(selectionSort([2])).to.deep.equal([2]);
    expect(selectionSort([5])).to.deep.equal([5]);
    expect(selectionSort([356])).to.deep.equal([356]);
  });

  it('should sort a random array', () => {
    const array = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];
    const sortedArray = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];

    expect(selectionSort(array)).to.deep.equal(sortedArray);
  });

  it('should sort a reversed sorted array', () => {
    const reversedArray = [12, 10, 8, 7, 6, 5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

    expect(selectionSort(reversedArray)).to.deep.equal(sortedArray);
  });
});
