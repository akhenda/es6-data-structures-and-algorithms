import chai from 'chai';
import linearSearch from 'src/algorithms/searching/linear-search';


const { expect } = chai;

describe('Linear Search', () => {
  describe('using array helper "forEach"', () => {
    it('should return the correct index of a given number', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 10, 26, 35, 45, 50];

      expect(linearSearch(array, 0)).to.be.equal(0);
      expect(linearSearch(array, 2)).to.be.equal(2);
      expect(linearSearch(array, 4)).to.be.equal(4);
      expect(linearSearch(array, 5)).to.be.equal(5);
      expect(linearSearch(array, 10)).to.be.equal(7);
      expect(linearSearch(array, 35)).to.be.equal(9);
    });

    it('should return the correct index of a given string', () => {
      const array = ['a', 'b', 'd', 'f', 'c', 'e'];

      expect(linearSearch(array, 'a')).to.be.equal(0);
      expect(linearSearch(array, 'b')).to.be.equal(1);
      expect(linearSearch(array, 'c')).to.be.equal(4);
      expect(linearSearch(array, 'd')).to.be.equal(2);
      expect(linearSearch(array, 'e')).to.be.equal(5);
      expect(linearSearch(array, 'f')).to.be.equal(3);
    });

    it('should return -1 for an item not found in the array', () => {
      const array = [0, 1, 2, 3, 4, 5, 6, 10, 26, 35, 45, 50];

      expect(linearSearch(array, 17)).to.be.equal(-1);
      expect(linearSearch(array, 73)).to.be.equal(-1);
      expect(linearSearch(array, 'a')).to.be.equal(-1);
      expect(linearSearch(array, 'h')).to.be.equal(-1);
    });
  });
});
