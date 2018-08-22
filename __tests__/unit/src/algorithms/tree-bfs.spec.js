import chai from 'chai';
import Tree from 'src/data-structures/tree';
import breadthFirstSearch from 'src/algorithms/tree/breadth-first-search';


const { expect } = chai;

describe('Tree Breadth First Search', () => {
  it('traverses the tree using BFS', () => {
    const tree = new Tree();

    tree.addNode('ceo');
    tree.addNode('cto', 'ceo');
    tree.addNode('dev1', 'cto');
    tree.addNode('dev2', 'cto');
    tree.addNode('dev3', 'cto');
    tree.addNode('cfo', 'ceo');
    tree.addNode('accountant', 'cfo');
    tree.addNode('cmo', 'ceo');

    const callbackFn = (node) => {
      console.log(node.data);
      return node.data;
    };

    const expectedResult = 'ceo cto cfo cmo dev1 dev2 dev3 accountant';

    expect(breadthFirstSearch(tree, callbackFn)).to.equal(expectedResult);
  });
});
