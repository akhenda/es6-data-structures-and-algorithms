import chai from 'chai';
import MyArray from 'src/data-structures/array';


const { expect } = chai;

describe('Array', () => {
  const array = new MyArray();

  beforeEach(() => {});

  it('creates an array successfully', () => {
    expect(array).to.be.an('object');
    expect(array).to.be.an.instanceof(MyArray);
  });

  describe('when we add to the array', () => {
    it('it adds "1" to the array', () => {
      array.add(1);
      expect(array.length()).to.equal(1);
    });

    it('it adds "2" to the array', () => {
      array.add(2);
      expect(array.length()).to.equal(2);
    });

    it('it adds "3" to the array', () => {
      array.add(3);
      expect(array.length()).to.equal(3);
    });

    it('it adds "4" to the array', () => {
      array.add(4);
      expect(array.length()).to.equal(4);
    });

    it('it has a length of 4', () => {
      expect(array.length()).to.equal(4);
    });

    it('it prints all the elements we have just added to the array', () => {
      expect(array.print()).to.equal('1 2 3 4');
    });
  });

  describe('when we search or get', () => {
    it('it searches for the element "3"', () => {
      expect(array.search(3)).to.equal(2);
    });

    it('it gets element at index "2"', () => {
      expect(array.getAtIndex(2)).to.equal(3);
    });
  });

  describe('when we remove, add and print elements', () => {
    it('it removes the element "3"', () => {
      array.remove(3);
      expect(array.print()).to.equal('1 2 4');
    });

    it('it adds "5" to the array', () => {
      array.add(5);
      expect(array.length()).to.equal(4);
    });

    it('it adds another "5" to the array', () => {
      array.add(5);
      expect(array.length()).to.equal(5);
    });

    it('it prints out the array again', () => {
      expect(array.print()).to.equal('1 2 4 5 5');
    });

    it('it removes the element "5"', () => {
      array.remove(5);
      expect(array.print()).to.equal('1 2 4');
    });
  });
});
