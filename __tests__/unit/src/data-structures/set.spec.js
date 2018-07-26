import chai from 'chai';
import Set from 'src/data-structures/set';


const { expect } = chai;

describe('Set', () => {
  it('is a class', () => {
    expect(typeof Set.prototype.constructor).to.equal('function');
  });

  describe('Data', () => {
    it('returns the data of the set', () => {
      const set = new Set();
      expect(set.data()).to.deep.equal([]);
      set.add(1);
      expect(set.length()).to.equal(1);
      set.add(2);
      expect(set.length()).to.equal(2);
      expect(set.data()).to.deep.equal([1, 2]);
    });
  });

  describe('Add', () => {
    it('adds elements into the set', () => {
      const set = new Set();
      expect(set.length()).to.equal(0);
      set.add('a');
      set.add('a');
      set.add('b');
      set.add('c');
      expect(set.length()).to.equal(3);
      expect(set.data()).to.deep.equal(['a', 'b', 'c']);
    });
  });

  describe('Remove', () => {
    it('removes an element from the set', () => {
      const set = new Set();
      set.add(1);
      set.add(1);
      set.add(2);
      expect(set.length()).to.equal(2);
      expect(set.data()).to.deep.equal([1, 2]);
      set.remove(2);
      expect(set.length()).to.equal(1);
      expect(set.data()).to.deep.equal([1]);
      set.add(2);
      set.add(1);
      expect(set.data()).to.deep.equal([1, 2]);
      set.remove(2);
      set.remove(1);
      expect(set.length()).to.equal(0);
      expect(set.data()).to.deep.equal([]);
    });
  });

  describe('Contains', () => {
    it('searches for elements in the set', () => {
      const set = new Set();
      set.add(2);
      set.add(1);
      expect(set.length()).to.equal(2);
      expect(set.data()).to.deep.equal([2, 1]);
      expect(set.contains(1)).to.equal(true);
      expect(set.contains(5)).to.equal(false);
      expect(set.contains(2)).to.equal(true);
    });
  });

  describe('Union', () => {
    it('returns a union of two sets without duplicates', () => {
      const set1 = new Set();
      set1.add(1);
      set1.add(2);
      expect(set1.length()).to.equal(2);
      expect(set1.data()).to.deep.equal([1, 2]);
      const set2 = new Set();
      set2.add(2);
      set2.add(3);
      expect(set2.length()).to.equal(2);
      expect(set2.data()).to.deep.equal([2, 3]);
      const set3 = set2.union(set1);
      expect(set3.length()).to.equal(3);
      expect(set3.data()).to.deep.equal([1, 2, 3]);
      expect(set3.print()).to.equal('1 2 3');
    });

    it('returns a union of 3 sets', () => {
      const set1 = new Set();
      set1.add(1);
      set1.add(2);
      expect(set1.length()).to.equal(2);
      expect(set1.data()).to.deep.equal([1, 2]);
      const set2 = new Set();
      set2.add(2);
      set2.add(3);
      expect(set2.length()).to.equal(2);
      expect(set2.data()).to.deep.equal([2, 3]);
      const set3 = set2.union(set1);
      expect(set3.length()).to.equal(3);
      expect(set3.data()).to.deep.equal([1, 2, 3]);
      const set4 = new Set();
      set4.add(4);
      set4.add(5);
      set4.add(6);
      set4.add(4);
      expect(set4.length()).to.equal(3);
      expect(set4.data()).to.deep.equal([4, 5, 6]);
      const set5 = set4.union(set3);
      expect(set5.length()).to.equal(6);
      expect(set5.data()).to.deep.equal([1, 2, 3, 4, 5, 6]);
      expect(set5.print()).to.equal('1 2 3 4 5 6');
    });
  });

  describe('Intersect', () => {
    it('returns the intersect of two sets', () => {
      const set1 = new Set();
      set1.add(1);
      set1.add(2);
      expect(set1.length()).to.equal(2);
      expect(set1.data()).to.deep.equal([1, 2]);
      const set2 = new Set();
      set2.add(2);
      set2.add(3);
      expect(set2.length()).to.equal(2);
      expect(set2.data()).to.deep.equal([2, 3]);
      const set3 = set2.intersect(set1);
      expect(set3.length()).to.equal(1);
      expect(set3.data()).to.deep.equal([2]);
      expect(set3.print()).to.equal('2');
    });
  });

  describe('Difference', () => {
    it('returns the difference of two sets', () => {
      const set1 = new Set();
      set1.add(1);
      set1.add(2);
      set1.add(4);
      expect(set1.length()).to.equal(3);
      expect(set1.data()).to.deep.equal([1, 2, 4]);
      const set2 = new Set();
      set2.add(1);
      set2.add(2);
      set2.add(3);
      expect(set2.length()).to.equal(3);
      expect(set2.data()).to.deep.equal([1, 2, 3]);
      const set3 = set1.difference(set2);
      expect(set3.length()).to.equal(1);
      expect(set3.data()).to.deep.equal([4]);
      expect(set3.print()).to.equal('4');
      const set4 = set2.difference(set1);
      expect(set4.length()).to.equal(1);
      expect(set4.data()).to.deep.equal([3]);
      expect(set4.print()).to.equal('3');
    });
  });

  describe('Is Subset', () => {
    it('checks whether the passed set is a subset of the calling set', () => {
      const set1 = new Set();
      set1.add(1);
      set1.add(2);
      set1.add(4);
      set1.add(3);
      set1.add(4);
      expect(set1.length()).to.equal(4);
      expect(set1.data()).to.deep.equal([1, 2, 4, 3]);
      const set2 = new Set();
      set2.add(1);
      set2.add(2);
      set2.add(3);
      expect(set2.length()).to.equal(3);
      expect(set2.data()).to.deep.equal([1, 2, 3]);
      expect(set1.isSubset(set2)).to.equal(true);
      expect(set2.isSubset(set1)).to.equal(false);
    });
  });
});
