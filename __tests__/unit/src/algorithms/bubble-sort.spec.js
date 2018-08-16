import chai from 'chai';
import bubbleSort from 'src/algorithms/sorting/bubble-sort';


const { expect } = chai;

describe('Bubble Sort', () => {
  it('should return empty array', () => {
    expect(bubbleSort([])).to.deep.equal([]);
  });

  it('should return the passed array', () => {
    expect(bubbleSort([1])).to.deep.equal([1]);
    expect(bubbleSort([2])).to.deep.equal([2]);
    expect(bubbleSort([5])).to.deep.equal([5]);
    expect(bubbleSort([356])).to.deep.equal([356]);
  });

  it('should sort a random array', () => {
    const array = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];
    const sortedArray = [2, 8, 10, 11, 12, 13, 14, 18, 19, 20];

    expect(bubbleSort(array)).to.deep.equal(sortedArray);
  });

  it('should sort a reversed sorted array', () => {
    const reversedArray = [12, 10, 8, 7, 6, 5, 4, 3, 2, 1];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

    expect(bubbleSort(reversedArray)).to.deep.equal(sortedArray);
  });
});
