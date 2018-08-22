import chai from 'chai';
import Tree from 'src/data-structures/tree';


const { expect } = chai;

describe('Tree', () => {
  const tree = new Tree();

  it('is a class', () => {
    expect(typeof Tree.prototype.constructor).to.equal('function');
  });

  describe('.addNode()', () => {
    it('adds nodes to the tree', () => {
      tree.addNode('ceo');
      tree.addNode('cto', 'ceo');
      tree.addNode('dev1', 'cto');
      tree.addNode('dev2', 'cto');
      tree.addNode('dev3', 'cto');
      tree.addNode('cfo', 'ceo');
      tree.addNode('accountant', 'cfo');
      tree.addNode('cmo', 'ceo');

      const treeStr = 'ceo | cto cfo cmo | dev1 dev2 dev3 accountant';
      const treeByLevel = 'ceo \ncto cfo cmo \ndev1 dev2 dev3 accountant';

      expect(tree.print()).to.equal(treeStr);
      expect(tree.printByLevel()).to.equal(treeByLevel);
      expect(tree.addNode('ceo')).to.equal('Root node is already assigned');
    });
  });

  describe('.remove()', () => {
    it('removes nodes from the tree', () => {
      tree.remove('cmo');

      const treeStr = 'ceo | cto cfo | dev1 dev2 dev3 accountant';

      expect(tree.print()).to.equal(treeStr);
    });
  });

  describe('.contains()', () => {
    it('checks whether the tree has the provided node data', () => {
      expect(tree.contains('dev1')).to.equal(true);
      expect(tree.contains('dev4')).to.equal(false);

      tree.remove('ceo');

      expect(tree.contains('ceo')).to.equal(false);
      expect(tree.print()).to.equal('No root node found');
      expect(tree.printByLevel()).to.equal('No root node found');
    });
  });
});
