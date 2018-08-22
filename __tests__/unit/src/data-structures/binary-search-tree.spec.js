import chai from 'chai';
import BinarySearchTree from 'src/data-structures/binary-search-tree';


const { expect } = chai;

describe('BinarySearchTree', () => {
  const bst = new BinarySearchTree();

  it('is a class', () => {
    expect(typeof BinarySearchTree.prototype.constructor).to.equal('function');
  });

  describe('.addNode()', () => {
    it('adds nodes to the bst', () => {
      bst.addNode(5);
      bst.addNode(3);
      bst.addNode(7);
      bst.addNode(2);
      bst.addNode(4);
      bst.addNode(4);
      bst.addNode(6);
      bst.addNode(8);

      const bstStr = '5 | 3 7 | 2 4 6 8';
      const bstByLevel = '5 \n3 7 \n2 4 6 8';

      expect(bst.print()).to.equal(bstStr);
      expect(bst.printByLevel()).to.equal(bstByLevel);
    });
  });

  describe('.contains()', () => {
    it('checks whether the bst has the provided node data', () => {
      expect(bst.contains(3)).to.equal(true);
      expect(bst.contains(9)).to.equal(false);
    });
  });

  describe('.getMin()', () => {
    it('gets the minimum node data', () => {
      expect(bst.getMin()).to.equal(2);
    });
  });

  describe('.getMax()', () => {
    it('gets the maximum node data', () => {
      expect(bst.getMax()).to.equal(8);
    });
  });

  describe('.getHeight()', () => {
    it('gets the height of the bst', () => {
      expect(bst.getHeight()).to.equal(2);
    });
  });

  describe('.isBalanced()', () => {
    it('checks whether the bst is balanced', () => {
      expect(bst.isBalanced()).to.equal(true);
    });
  });

  describe('.remove()', () => {
    it('removes nodes from the bst', () => {
      let bstStr = '5 | 3 7 | 2 4 6 8';

      expect(bst.remove(11)).to.be.an('undefined');
      expect(bst.print()).to.equal(bstStr);

      bst.remove(5);
      bstStr = '6 | 3 7 | 2 4 8';
      expect(bst.print()).to.equal(bstStr);

      bst.remove(7);
      bstStr = '6 | 3 8 | 2 4';
      expect(bst.print()).to.equal(bstStr);

      bst.remove(8);
      bstStr = '6 | 3 | 2 4';
      expect(bst.print()).to.equal(bstStr);
    });
  });

  describe('.isBalancedOptimized()', () => {
    it('checks whether the bst is optimized and balanced', () => {
      expect(bst.isBalanced()).to.equal(false);

      bst.remove(4);
      bst.remove(2);
      bst.remove(3);
      bst.remove(6);

      expect(bst.print()).to.equal('No root node found');
      expect(bst.printByLevel()).to.equal('No root node found');

      expect(bst.getHeight()).to.equal(-1);
      expect(bst.isBalanced()).to.equal(true);

      bst.addNode(10);

      expect(bst.getHeight()).to.equal(0);
      expect(bst.isBalanced()).to.equal(true);

      bst.addNode(6);
      bst.addNode(14);
      bst.addNode(4);
      bst.addNode(8);
      bst.addNode(12);
      bst.addNode(16);
      bst.addNode(3);
      bst.addNode(5);
      bst.addNode(7);
      bst.addNode(9);
      bst.addNode(11);
      bst.addNode(13);
      bst.addNode(15);
      bst.addNode(17);

      expect(bst.print()).to.equal('10 | 6 14 | 4 8 12 16 | 3 5 7 9 11 13 15 17');

      bst.remove(10); // remove 10, 11 goes up

      expect(bst.print()).to.equal('11 | 6 14 | 4 8 12 16 | 3 5 7 9 13 15 17');

      bst.remove(12); // remove 12; 13 goes up

      expect(bst.print()).to.equal('11 | 6 14 | 4 8 13 16 | 3 5 7 9 15 17');
      expect(bst.isBalanced()).to.equal(true);
      expect(bst.isBalancedOptimized()).to.equal(true);

      bst.remove(13); // remove 13, 13 has no children so nothing changes

      expect(bst.print()).to.equal('11 | 6 14 | 4 8 16 | 3 5 7 9 15 17');
      expect(bst.isBalanced()).to.equal(false);
      expect(bst.isBalancedOptimized()).to.equal(false);
    });
  });
});
