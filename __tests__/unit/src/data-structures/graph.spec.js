import chai from 'chai';
import Graph from 'src/data-structures/graph';


const { expect } = chai;

describe('Graph', () => {
  const graph = new Graph();

  it('is a class', () => {
    expect(typeof Graph.prototype.constructor).to.equal('function');
  });

  describe('.addVertex()', () => {
    it('adds vertices to the graph', () => {
      graph.addVertex(1);
      graph.addVertex(2);
      graph.addVertex(3);
      graph.addVertex(4);
      graph.addVertex(5);
      graph.addVertex(6);

      const graphString = '1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->';

      expect(graph.size()).to.equal(6);
      expect(graph.print()).to.equal(graphString);
    });
  });

  describe('.removeVertex()', () => {
    it('removes vertices from the graph', () => {
      graph.removeVertex(2);
      graph.removeVertex(5);

      const graphString = '1 -> | 3 -> | 4 -> | 6 ->';

      expect(graph.size()).to.equal(4);
      expect(graph.print()).to.equal(graphString);
    });
  });

  describe('.hasVertex()', () => {
    it('checks whether the graph has the provided vertex', () => {
      expect(graph.hasVertex(6)).to.equal(true);
      expect(graph.hasVertex(2)).to.equal(false);
    });
  });

  describe('.addEdge()', () => {
    it('adds edges to the graph', () => {
      expect(graph.size()).to.equal(4);

      graph.addVertex(2);
      graph.addVertex(5);

      expect(graph.size()).to.equal(6);

      graph.addEdge(1, 2);
      graph.addEdge(1, 5);
      graph.addEdge(2, 3);
      graph.addEdge(2, 5);
      graph.addEdge(3, 4);
      graph.addEdge(4, 5);
      graph.addEdge(4, 6);

      const graphString = '1 -> 2, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 6 -> 4 | 2 -> 1, 3, 5 | 5 -> 1, 2, 4';

      expect(graph.size()).to.equal(6);
      expect(graph.print()).to.equal(graphString);
    });
  });

  describe('.removeEdge()', () => {
    it('removes edges from the graph', () => {
      graph.removeEdge(1, 2);
      graph.removeEdge(4, 5);
      graph.removeEdge(10, 11);

      const graphString = '1 -> 5 | 3 -> 2, 4 | 4 -> 3, 6 | 6 -> 4 | 2 -> 3, 5 | 5 -> 1, 2';

      expect(graph.size()).to.equal(6);
      expect(graph.print()).to.equal(graphString);
    });
  });

  describe('.hasEdge()', () => {
    it('checks whether the graph has the provided edge', () => {
      expect(graph.hasEdge(1, 2)).to.equal(false);
      expect(graph.hasEdge(3, 2)).to.equal(true);
    });
  });

  describe('.size()', () => {
    it('returns the size of the graph', () => {
      expect(graph.size()).to.equal(6);
    });
  });

  describe('.relations()', () => {
    it('returns the number of edges in the graph', () => {
      graph.removeVertex(6);

      expect(graph.relations()).to.equal(4);
    });
  });

  describe('.traverse()', () => {
    it('traverses the graph using the provided algorithm', () => {
      // we'll write this tests later
      expect(graph.traverse(1, () => null, 'bfs')).to.be.an('undefined');
      expect(graph.traverse(1, () => null, 'dfs')).to.be.an('undefined');
    });
  });

  describe('.print()', () => {
    it('prints a representation of the graph', () => {
      const graphString = '1 -> 5 | 3 -> 2, 4 | 4 -> 3 | 2 -> 3, 5 | 5 -> 1, 2';

      expect(graph.print()).to.equal(graphString);
    });
  });

  describe('.clear()', () => {
    it('clears the graph', () => {
      graph.clear();

      expect(graph.size()).to.equal(0);
      expect(graph.print()).to.equal('');
      expect(graph.relations()).to.equal(0);
    });
  });
});
